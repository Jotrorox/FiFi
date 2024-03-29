const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
        .setDescription('Stops playing LoFi!'),
	async execute(interaction) {
        // Get the guild from the interaction
        const guild = interaction.guild;

        // Check if the bot is in a voice channel
        const voiceConnection = getVoiceConnection(guild.id);

        if (!voiceConnection) {
            const embed = new EmbedBuilder()
                .setTitle("Error!")
                .setDescription("The bot is not in a voice channel!")
                .setColor(Colors.Red);
            await interaction.reply({ embeds: [embed], ephemeral: true });
            return;
        }

        // Leave the voice channel
        voiceConnection.destroy();

        const embed = new EmbedBuilder()
            .setColor(Colors.Purple)
            .setTitle("Stopped!")
            .setDescription("The bot successfully stopped playing LoFi and left the voice channel.");

        await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};
