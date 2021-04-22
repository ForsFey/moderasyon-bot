const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has((client.config.jailhammer)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField(`Aspasia` , `Bir kullanıcı etiketlemelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
 
  member.roles.add((client.config.kayıtsız)); //kayıtsız
member.roles.add((client.config.kayıtsız1));
  member.roles.remove((client.config.jailrol)); // jail 
   
   


   const kanal = message.guild.channels.cache.find(c => c.id == (client.config.jaillog));
   const embed1 = new Discord.MessageEmbed()
    .addField(
      `Bir Üyenin cezası kaldırıldı`,
      `**Cezası kaldırılan üye =>** ${member.user} \n **Cezayı kaldıran yetkili =>** ${message.author} `
    )
    .setColor("BLACK")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .addField(
      `Üyenin cezası kaldırıldı`,
      `${member.user} **adlı üyenin cezası kaldırıldı.**`
    )
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  return message.channel.send(embed).then(kanal.send(embed1));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unjail", "unjail"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "unjail",
  description: "Sunucuya unjail ne dersin ?",
  usage: "unjail "
};
