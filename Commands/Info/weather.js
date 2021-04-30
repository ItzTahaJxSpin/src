const weather = require('weather-js');
const discord = require('discord.js');
const Command = require('../../Structures/Command.js')


module.exports = class extends Command {
    constructor(...args) {
		super(...args, {
			aliases: ["weather"],
			description: 'Get the weather of anywhere.',
			category: 'Info',
			usage: ' + `<country/city>`'
		});
    }
    
    run(message, args) {
       
      if(!args.length) {
        return message.channel.send(`Please give the weather location\n\n Usage ➜ ` + "**" + this.client.prefix + "`weather`** **`<Country/City>`**")
      }
   
   weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  try {
   
  let embed = new discord.MessageEmbed()
  .setTitle(`Weather - ${result[0].location.name}`)
  .setColor("RANDOM")
  .setDescription("Temperature units can may be differ some time")
  .setTimestamp()
  .addField("Temperature", `${result[0].current.temperature} Celcius`, true)
  .addField("Sky Text", result[0].current.skytext, true)
  .addField("Humidity", result[0].current.humidity, true)
  .addField("Wind Speed", result[0].current.windspeed, true)//What about image
  .addField("Observation Time", result[0].current.observationtime, true)
  .addField("Wind Display", result[0].current.winddisplay, true)
  .setThumbnail(result[0].current.imageUrl);
     message.channel.send(embed)
  } catch(err) {
    return message.channel.send("Unable To Get the data of Given location")
  }
  });   
      //LETS CHECK OUT PKG
      
    }
}
  