const Command = require('../../Structures/Command');
const { prefix } = require('../../config.json');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')
const cooldown = new Set()
const cdtime = 1 //This is in seconds

function doAssAction() {
    var rand = require('../../pics/ass-pics.json');
 
    return rand[Math.floor(Math.random() * rand.length)];
}



module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			aliases: ['ass', "asses"],
			description: 'Generate Ass gif.',
			category: 'NSFW',
			usage: ' '
		});
	}


		run(message) {


                            if(!message.channel.nsfw) {
                                
                                const embed = new Discord.MessageEmbed()
                        
                        
                            .setColor("RED")
                            .setAuthor('⛔' + message.author.username + '⛔')
                            .setTitle("move to a nsfw channel")
                            .setFooter('This is not an NSFW channel')

                            message.channel.send(embed)
                        
                   }else {

                    if(cooldown.has(message.author.id)){
                        
                        return message.channel.send("Please wait 1 seconds between each commands")
                      }
                      cooldown.add(message.author.id)
                      
                      setTimeout(() => {
                        cooldown.delete(message.author.id)
                      }, cdtime * 1000) //This should be in millisends (ms)

                            const dembed = new Discord.MessageEmbed()
                            
                            
                                .setColor("#FFB6C4")
                                .setAuthor('🍑' + message.author.username + '🍑')
                                .setImage(doAssAction())
                                .setFooter('❤️ASSU 🍑 ASSU❤️')

                                message.channel.send(dembed)

                    }
                             
         
        }
	};