// https://cdn.boob.bot/Gifs/1954.gif
// https://cdn.boob.bot/ass/5109.JPG

const Command = require('../../Structures/Command');
const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js')
const cooldown = new Set()
const cdtime = 1 //This is in seconds

function doPornAction() {
    var rand = require('../../pics/porn.json');

    return rand[Math.floor(Math.random() * rand.length)];
}

/*function doPornGraphAction() {
    var rand1 = require('./../../../pics/porn.json');

    return rand1[Math.floor(Math.random() * rand1.length)];
}
*/

module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			aliases: ['porn', "porngif", "pornography", "fuck"],
			description: 'Porngif gif in embed.',
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
                            
                            
                                .setColor("#FF46C4")
                                .setAuthor('' + message.author.username + '')
                                .setImage(doPornAction())
                                .setFooter('❤️PORN 🍑 PORN❤️')
                               message.channel.send(dembed);
                                // var rand = require('./../../../pics/porn-pics.json');
                                // var random =  rand[Math.floor(Math.random() * rand.length)];
                                //const attachment = new MessageAttachment(random);
                                // message.channel.send(random);
                    }
                    }
                             
         
        }
