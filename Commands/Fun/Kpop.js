const Command = require('../../Structures/Command.js');
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["kpop"],
			description: 'Provide you a Random Kpop singer image and name.',
			category: 'Fun',
			usage: ' '
		});
	}

	async run(message) {
        let data = await random.getKpop()
    message.channel.send(data)
	}

};
