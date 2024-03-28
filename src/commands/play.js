const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Joins your channel and plays sum LoFi!'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle("Not Implemented!")
			.setDescription("This feature has not been implemented yet!\nBut @Jotrorox is working hard on it!");

		// Reply with the embed and set the response to be ephemeral
		await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};
