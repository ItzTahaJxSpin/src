const something = require('something-random');
const Command = require('../../Structures/Command');
const somethingRandom = new something({
    type: 'embed' // It can be: message, embed or url(for embed)
});

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["roll", "randomnumber", "rn"],
			description: 'Random number between 1 and 100',
			category: 'Fun',
			usage: ' '
		});
	}

	async run(message) {
        return message.channel.send(somethingRandom.randomNumber(1, 100));
	}

};
