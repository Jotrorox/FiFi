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

        // Check if the bot is connected to any voice channels in the guild
        const voiceConnections = guild.voiceStates.cache.filter(state => state.member.user.bot);

        if (voiceConnections.size > 0) {
            // Disconnect the bot from all voice channels
            voiceConnections.forEach(state => {
                const connection = getVoiceConnection(guild.id, state.channelId);
                if (connection) connection.destroy();
            });

            await interaction.reply('Disconnected from all voice channels.');
        } else {
            await interaction.reply('The bot is not connected to any voice channels.');
        }
	},
};
