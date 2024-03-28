const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType } = require('@discordjs/voice');
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
        .setDescription('Joins your channel and plays sum LoFi!'),
	async execute(interaction) {
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
    
        const embed = new EmbedBuilder()
			.setTitle("Playing!")
			.setDescription("The bot successfully joined your vc and should've started playing LoFi. If that is not the case please contact @jotrorox.");

        await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};
