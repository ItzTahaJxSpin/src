const Command = require('../../Structures/Command.js');
const { Random } = require("something-random-on-discord")
const random = new Random();
const Discord = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["neko"],
			description: 'Random neko.',
			category: 'NSFW',
			usage: ' '
		});
	}

	async run(message) {
		if(!message.channel.nsfw) {
                                
			const embed = new Discord.MessageEmbed()
	
	
		.setColor("RED")
		.setAuthor('⛔' + message.author.username + '⛔')
		.setTitle("move to a nsfw channel")
		.setFooter('This is not an NSFW channel')

		message.channel.send(embed)
	
}else {
				let data = await random.getNeko()
			message.channel.send(data)
	}
}
};
