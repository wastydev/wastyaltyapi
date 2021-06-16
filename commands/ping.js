const Discord = require('discord.js');

exports.run = async (client, message, args,) => {
	

let embed = new Discord.MessageEmbed()
.setColor("RANDOM")

.addField("**__Gecikme Sürem__**", `**${client.ws.ping}** ms Olarak Hesaplandı.`,true)

message.channel.send(embed)

}

exports.config = {
	name: "ping",
  guildOnly: true,
  aliases: []
};