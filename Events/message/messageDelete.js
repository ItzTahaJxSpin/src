const Event = require('../../Structures/Event');
const MenuDocsEmbed = require('../../Structures/MenuDocsEmbed');

module.exports = class extends Event {

	async run(message) {
		if (!message.guild || message.author.bot) return;
		const attachments = message.attachments.size ? message.attachments.map(attachment => attachment.proxyURL) : null;
		const embed = new MenuDocsEmbed()
			.setColor('RED')
			.setAuthor(message.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Message Deleted')
			.setDescription([
				`**❯ Message ID:** ${message.id}`,
				`**❯ Channel:** ${message.channel}`,
				`**❯ Author:** ${message.member.displayName}`,
				`**❯ AuthorID:** ${message.author.id}`,
				`${attachments ? `**❯ Attachments:** ${attachments.join('\n')}` : ''}`
			]);
		if (message.content.length) {
			embed.splitFields(`**❯ Deleted Message:** ${message.content}`);
		}

		const channel = message.guild.channels.cache.find(ch => ch.name === '「🚨」moderation-logs');
			if (!channel) {			
				const eembed = new MenuDocsEmbed()

				eembed.setColor("RED")
				eembed.setAuthor('⛔' + message.guild.owner.displayName + '⛔')
				eembed.setDescription("**Please make a channel named**\n **`「🚨」moderation-logs` where I can**\n **send my logs.**")
				eembed.setFooter('🚨')
				eembed.setTimestamp()
				message.reply(eembed)
			
			}else {
				channel.send(embed);
			}
	}

};
