const MenuDocsClient = require('../../Structures/MenuDocsClient');
const Command = require('../../Structures/Command');
const config = require('../../config.json');
const discord = require("discord.js")
const MenuDocsEmbed = require('../../Structures/MenuDocsEmbed');
const client = new MenuDocsClient(config);

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['mute'],
			description: 'Mute anyone who break rules.',
			category: 'Moderation',
			usage: ' <@mention> <reason>'
		});
	}

 async run( message, args) {
     
    if (!message.member.hasPermission("MANAGE_ROLES")) {
       
        let embed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("❌ Sorry but you do not have permission to mute.");
        return message.channel.send(embed)
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES"))  {
       
        let eembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("I do not have permission to manage roles.");
        return message.channel.send(eembed)
    } 

    
    const member = message.mentions.members.first();
    
    if(!member) {
        let wembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setDescription("Please mention the member to who you want to mute.");
        return message.channel.send(wembed)
    
    }


    if( member.user.bot) {return message.channel.send("This user seems to be a bot, I cannot mute bots.")}
    
    let we = message.member
    if(member.id === we.id)  {
        let dembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("Sorry, but you cannot mute yourself.");
        return message.channel.send(dembed)
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
        let qembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("Please Give the reason to mute the member.");
        return message.channel.send(qembed)
    }
    
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
if(!muterole) {
        let aembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("This server do not have role with name **`Muted`**.");
         message.channel.send(aembed)

        }

        let memberr = message.mentions.members.first()

 if(memberr.roles.cache.some(r => r.name === "Muted")) {
    let zembed = new discord.MessageEmbed()
    .setColor("#ff2050")
    .setTimestamp()
    .setDescription("This user is already muted.");
     message.channel.send(zembed)
    }
    else{
    
    member.roles.add(muterole).catch(console.error);
     message.channel.send(`✅ **${message.mentions.users.first().username}** has been mute for \`${reason}\`✅`)
}
let punishroom = message.guild.channels.cache.find(x => x.name === "「❌」punishment")

if (!punishroom){
    const eeeembed = new MenuDocsEmbed()

				.setColor("RED")
				.setAuthor('⛔' + message.mentions.users.first().username + '⛔')
				.setDescription("**Please make a channel named `「❌」punishment` where I can send my punishment-logs.**")
				.setFooter('🚨')
				.setTimestamp()
				message.channel.send(eeeembed)
			
            }
            
            if(!memberr.roles.cache.some(r => r.name === "Muted")) {
            const eweembed = new MenuDocsEmbed()

                .setColor("RED")
				.setAuthor('⛔' + message.mentions.users.first().username + '⛔')
				.setDescription(`✅ **${message.mentions.users.first().username}** has been mute For \`${reason}\`✅ `)
				.setFooter('🚨')
				.setTimestamp()

				punishroom.send(eweembed);
            }else{return}
           
            
            
// member.send(`You are muted in **${message.guild.name}** For \`${reason}\``)catch (err) { console.log('Cannot send Direct Messages to your user!'); }
member.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
 .catch(() => console.log(`Can't send DM to ${message.mentions.users.first().username}!`));
    
//WE ARE DONE HERE 
    
  }
};
