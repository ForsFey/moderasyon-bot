//sohbet-aç
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });

  const Embed = new Discord.MessageEmbed()
  .setDescription("**Sohbet kanalı ``Yazılabilir`` durumuna getirildi**");
  message.channel.send(Embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "MADE BY HYPER",
  usage: "prefix + sohbet-aç"
};


exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  const embed = new Discord.MessageEmbed()
  .setDescription("**Sohbet kanalı ``Yazılamaz`` durumuna getirildi**");
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "sohbet-kapat",
  description: "MADE BY HYPER",
  usage: "prefix + sohbet-kapat"
};
//serendia  ❤️
