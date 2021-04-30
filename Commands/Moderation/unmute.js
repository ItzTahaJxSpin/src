const { MessageEmbed } = require("discord.js");
const Command = require('../../Structures/Command');
const discord = require("discord.js")
module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['unmute'],
			description: 'Unmute anyone who was muted.',
			category: 'Moderation',
			usage: ' <@mention>'
		});
	}

 async run( message, args) {
 if (!message.guild.me.hasPermission("MANAGE_ROLES"))  {
       
        let eembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("I do not have permission to manage roles.");
        return message.channel.send(eembed)
    } 
   if (!message.member.hasPermission("MANAGE_ROLES")) {
       
        let embed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("Sorry but you do not have permission to unmute someone.");
        return message.channel.send(embed)
    }

    
    const member = message.mentions.members.first();
    
    if(!member) {
        let wembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("Please mention the member to who you want to unmute.");
        return message.channel.send(wembed)
    
    }
    
    if(member.id === message.author.id) {
        let dembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("BRUH! You are unmuted 😐");
        return message.channel.send(dembed)
    }
    
    
    
  //TIME TO LET UNMUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
      if(member.roles.cache.has(muterole)) {
        let aembed = new discord.MessageEmbed()
        .setColor("#ff2050")
        .setTimestamp()
        .setDescription("Given User do not have mute role so what I am suppose to take 😐");
        return message.channel.send(aembed)
    }

    
    
   if(member.roles.cache.has(muterole)) {
    let zembed = new discord.MessageEmbed()
    .setColor("#ff2050")
    .setTimestamp()
    .setDescription(`${member} have been unmuted.`);
     message.channel.send(zembed)
    }
    
    member.roles.remove(muterole)

await message.channel.send(`**${message.mentions.users.first().username}** is unmuted now.`)
    
// member.send(`You are unmuted in **${message.guild.name}**`)
    
    
//WE ARE DONE HERE 
    
  }
};
