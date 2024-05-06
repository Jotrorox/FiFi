const {EmbedBuilder} = require("discord.js");
module.exports.function = async function handleGuildJoin (guild)  {
    const welcomeEmbed = new EmbedBuilder()
        .setColor('#2ba5ff')
        .setTitle('Thanks!')
        .setURL('https://github.com/jotrorox/fifi')
        .setAuthor({ name: 'Johannes (Jotrorox)', iconURL: 'https://https://github.com/jotrorox.png' })
        .setDescription('Thanks for inviting this bot to your server! It really means a lot to me. If you encounter any issues, please let me know by creating an issue in the GitHub repo or messaging me directly. I hope you enjoy using this bot as much as I enjoyed creating it.')
        .setTimestamp()
        .setFooter({ text: 'Fifi' });
    await guild.publicUpdatesChannel.send({embeds: welcomeEmbed})
}