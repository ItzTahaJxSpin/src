const { get } = require("request-promise-native");
const Command = require('../../Structures/Command');
const { MessageEmbed } = require("discord.js")


module.exports = class extends Command {
    constructor(...args) {
		super(...args, {
			      aliases: ["pokemon"],
            description: "Get any pokemon description",
            category: "Info",
            usage: " + <name>",
		});
    }
  run ( message, args) {


const options = {
  url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
  json: true
  
}

if(!args.length) {
  return message.channel.send(`Please give the name of the pokemon\n\n Usage ➜ ` + "**" + this.client.prefix + "`pokemon`** **`<name>`**\n\n```diff\n-NOTE ==> PLEASE ENTER THE CORRECT NAME OF THE POKEMON OR THE COMMAND WON'T WORK```")
}
else{
message.channel.send("Fetching Information for API").then(msg => {
  get(options).then(body => {
    
    let embed = new MessageEmbed()
    .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
    .setDescription(body.info.description)
    .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
    
    message.channel.send(embed)
    msg.delete()
  })
})
}

}
}
