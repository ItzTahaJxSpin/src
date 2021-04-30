const Command = require('../../Structures/Command');
const { prefix } = require('../../config.json');
const { DiscordAPIError } = require('discord.js');
const Discord = require('discord.js')

function doKissAction() {
    var rand = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
        'https://media.giphy.com/media/hnNyVPIXgLdle/source.gif',
        'https://media.giphy.com/media/bGm9FuBCGg4SY/source.gif',
        'https://media.giphy.com/media/zkppEMFvRX5FC/source.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/source.gif',
        'https://media.giphy.com/media/11k3oaUjSlFR4I/source.gif',
        'https://media.giphy.com/media/WfyqYbLH5rzl6/source.gif',
        'https://media.giphy.com/media/gK6oSFUFoFwVq/giphy.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}



module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			aliases: ['kiss'],
			description: 'Generate a kiss gif.',
			category: 'NSFW',
			usage: ' + `<@user>`'
		});
	}


		run(message) {
            let args = message.content.substring(prefix.length).split(" ")
         
            switch (args[0]) {
                           case 'kiss':
                        const personTagged = message.mentions.members.first();
                        
                        if(!message.channel.nsfw) {
                                
                            const embed = new Discord.MessageEmbed()
                    
                    
                        .setColor("RED")
                        .setAuthor('⛔' + message.author.username + '⛔')
                        .setTitle("move to a nsfw channel")
                        .setFooter('This is not an NSFW channel')

                        message.channel.send(embed)
                    
               }else {
                        
                        if(!args[1] || !personTagged) {
                            message.channel.send(`You are missing arguments!\n\n Usage ➜ ` + "**" + this.client.prefix + "`kiss`** **`<@user>`**")
                        }else{

                            const dembed = new Discord.MessageEmbed()
                            
                            
                                .setColor("#FFB6C1")
                                .setAuthor('💞' + message.author.username + '💞' + ' has kissed ' + personTagged.displayName + ' ' )
                                .setImage(doKissAction())
                                .setFooter('❤️KISSU KISSU KISSU❤️')

                                message.channel.send(dembed)

                        }
                       
                        
                        
         
                    break;
                }
           }
        }
	};