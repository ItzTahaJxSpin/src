const Command = require('../../Structures/Command.js');
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["advice"],
			description: 'Provied you a random advice.',
			category: 'Fun',
			usage: ' '
		});
	}

	async run(message) {
				let data = await random.getAdvice()
			message.channel.send(data)
	}

};
