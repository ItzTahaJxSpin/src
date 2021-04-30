const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const Command = require('../../Structures/Command');


module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			description: "**>** **NQN (Not-Quite-Nitro)**: This bot automatically allows access to all emotes from The server you are using the bot in.`",
			category: 'Info',
		});
	}
 run(message){
{
           const embed = new MessageEmbed()
       
        .setColor("RANDOM")
        .setTitle('Invite NQN-Baby bot')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=787653537411629058&permissions=0&scope=bot")
        .setTimestamp()
        .setDescription('**NQN requires no commands to get started:** it automatically allows access to all emotes from the server, and looks for :emoji: you send, replacing them with what you meant.This means simply by inviting it to your server only, you are able to use all the animated emoji that only people with Nitro were able to use before.');
        return message.channel.send(embed)
    }

}
}