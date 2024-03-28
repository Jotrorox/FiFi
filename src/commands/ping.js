const { SlashCommandBuilder, EmbedBuilder, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the Ping of the Bot!'),
	async execute(interaction) {
		// Calculate the bot's ping
		const ping = Date.now() - interaction.createdTimestamp;

		// Determine the color of the embed based on the ping value
		let color = ping < 200 ? Colors.Green : ping < 500 ? Colors.Yellow : Colors.Red;

		const embed = new EmbedBuilder()
			.setTitle("Pong!")
			.setDescription(`Bot's ping: ${ping}ms`)
			.setColor(color);

		// Reply with the embed and set the response to be ephemeral
		await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};
