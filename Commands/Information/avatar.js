const Command = require('../../Structures/Command');
const { prefix } = require('../../config.json');
const Discord = require('discord.js')

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['avatar'],
			description: "returns a users avatar",
			category: 'Information',
			usage: '[user]'
		});
	
    }
run(message) {
            let args = message.content.substring(prefix.length).split(" ")
         
            switch (args[0]) {

                     case 'avatar':
                         
                        const embed = new Discord.MessageEmbed()
 
                        if(!message.mentions.users.first()){

                            embed.setTitle("Your profile picture:")
                            embed.setImage(message.author.displayAvatarURL({format: 'jpg', dynamic: true, size: 4096}))
                            embed.setColor("#ebd18a")

                            return message.channel.send(embed)
               }else{

                        const user = message.mentions.users.first()
                        embed.setTitle(`${user.tag}'s profile picture:`)
                        embed.setImage(user.displayAvatarURL({format: 'jpg', dynamic: true, size: 4096}))
                        embed.setColor('#ebd18a')

                        return message.channel.send(embed)
                
                
            }
        }

     }
        
};