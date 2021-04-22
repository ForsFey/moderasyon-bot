const Discord = require('discord.js');
const db = require("quick.db")
exports.run = (client, message, args) => {
    if (!message.member.roles.cache.has("") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('**Bu komutu kullanabilmek için** <@&761712440542363648> **Yetkisine Sahip Olman Gerek**').setColor("Black"));
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('**Bir üye etiketlemen gerekiyor**').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  message.guild.members.cache.get(member.id).roles.cache.forEach(r => {
message.guild.members.cache.get(member.id).roles.remove(r)

   message.react("814559010844966923")
})
  member.roles.add("814547912759181372")
  member.roles.add("814547913781805066")
  let embed = new Discord.MessageEmbed() 
  .setDescription(`<a:alastra_tik:814576897567752203> ${kullanıcı} Adlı Üye ${message.author} Tarafından Kayıtsıza Atıldı`) 
  .setFooter(`Raones was here !`)
  .setTimestamp()
  return message.channel.send(embed)

}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıtsız"],
    permLevel: 0,
    name: "kayıtsız"
  }
  
  exports.help = {
    name: "kayıtsız"
  };