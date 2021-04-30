const Command = require('../../Structures/Command.js');
const { Random } = require("something-random-on-discord")
const random = new Random();

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ["hug"],
			description: 'Provied you a random image url of anime(based on action of the command name).',
			category: 'Fun',
			usage: ' '
		});
	}

	async run(message) {
        let data = await random.getAnimeImgURL("hug")
        message.channel.send(data)
	}

};
