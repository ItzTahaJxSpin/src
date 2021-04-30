const Command = require('../../Structures/Command.js');
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["joke"],
			description: 'Provied you a random joke.',
			category: 'Fun',
			usage: ' '
		});
	}

	async run(message) {
				let data = await random.getJoke()
			message.channel.send(data)
	}

};
