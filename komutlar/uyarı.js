const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has((client.config.commander)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField((client.config.sunucuadı) , `Bir kullanıcı etiketlemelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
 
  member.roles.add((client.config.uyarı)); //rol
   
   


   const kanal = message.guild.channels.cache.find(c => c.id == (client.config.uyarılog));
   const embed1 = new Discord.MessageEmbed()
    .addField(
      (client.config.sunucuadı),
      `${member.user} Kullanıcı uyarıldı umarım birdaha yapmaz. `
    )
    .setColor("BLACK")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .addField(
      (client.config.sunucuadı),
      `${member.user} **adlı üyeye <@&${client.config.uyarı}> rolu verildi**`
    )
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();
  return message.channel.send(embed).then(kanal.send(embed1));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["uyarı"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "uyarı",
  description: "Sunucuya ne dersin ?",
  usage: "uyarı "
};
