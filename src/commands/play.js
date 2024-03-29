const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');
const ytdl = require('ytdl-core');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
        .setDescription('Joins your channel and plays sum LoFi!'),
	async execute(interaction) {
        const youtubeURL = 'https://www.youtube.com/watch?v=FE3Imqn63sc';

        if (!interaction.member.voice) {
            const embed = new EmbedBuilder()
			    .setTitle("Error!")
			    .setDescription("You have to be in a vc to use this command!")
                .setColor(Colors.Red);
                await interaction.reply({ embeds: [embed], ephemeral: true });
                return;
        }
    
        const connection = joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
    
        const stream = ytdl(youtubeURL, { filter: 'audioonly', quality: 'highestaudio' });
        const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
        const player = createAudioPlayer();

        player.play(resource);
        connection.subscribe(player);

        player.on('error', error => {
            console.error('Error:', error);
        });
    
        player.on('idle', () => {
            const stream = ytdl(youtubeURL, { filter: 'audioonly', quality: 'highestaudio' });
            const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });
            player.play(resource);
        });
        
        const embed = new EmbedBuilder()
            .setColor(Colors.Purple)
			.setTitle("Playing!")
			.setDescription("The bot successfully joined your vc and should've started playing LoFi. If that is not the case please contact @jotrorox.");

        await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};
