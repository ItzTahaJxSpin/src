const something = require('something-random');
const Command = require('../../Structures/Command');
const somethingRandom = new something({
    type: 'embed' // It can be: message, embed or url(for embed)
});

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["cat", "kitty"],
			description: 'Random Cat gif.',
			category: 'Animals',
			usage: ' '
		});
	}

	async run(message) {
			return await somethingRandom.randomCat(message);
	}

};
