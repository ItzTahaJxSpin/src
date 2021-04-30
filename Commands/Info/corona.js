const discord = require("discord.js")
const Command = require('../../Structures/Command');
const { NovelCovid } = require("novelcovid");

module.exports = class extends Command {
    constructor(...args) {
		super(...args, {
			      aliases: ["covid", "covid19"],
            description: "Get the stats of corona",
            category: "Info",
            usage: "corona all or corona <country>",
		});
    }
    
    async run(message, args) {
      const track = new NovelCovid();

    if(!args.length) {
      return message.channel.send(`Please give the name of country\n\n Usage ➜ ` + "**" + this.client.prefix + "`corona`** **`<all/country>`**")
    }
    
    


    if(args.join(" ") === "all") {
      let corona = await track.all() //it will give global cases
      
      let embed = new discord.MessageEmbed()
      .setTitle("Global Cases")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
      
    }else {
      let corona = await track.countries(args.join(" ")) //change it to countries
      
      let embed = new discord.MessageEmbed()
      .setTitle(`${corona.country}`)
      .setColor("#ff2050")
      .setTimestamp()
      .setDescription("Sometimes cases number may differ from small amount.")
      .addField("Total Cases", corona.cases, true)
      .addField("Total Deaths", corona.deaths, true)
      .addField("Total Recovered", corona.recovered, true)
      .addField("Today's Cases", corona.todayCases, true)
      .addField("Today's Deaths", corona.todayDeaths, true)
      .addField("Active Cases", corona.active, true);
      
      return message.channel.send(embed)
      
      
    } 
    
  }
  }

