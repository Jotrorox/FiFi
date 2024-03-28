const { Client, GatewayIntentBits, Events } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType } = require('@discordjs/voice');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.once(Events.ClientReady, readyClient => {
    console.log(`The bot is now ready and logged in as ${readyClient.user.username}`);
});

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    if (!message.member.voice.channel) {
        return message.reply('You must be in a voice channel to play music!');
    }

    const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
    });

    const player = createAudioPlayer();
    connection.subscribe(player);

    const resource = createAudioResource(fs.createReadStream('./rsc/empty-mind-118973.mp3'), {
        inputType: StreamType.Arbitrary,
    });

    player.play(resource);

    player.on('error', error => {
        console.error('Error:', error);
    });

    player.on('idle', () => {
        connection.destroy();
    });

    message.reply('Now playing!');
});

client.login(process.env.DISCORD_TOKEN);