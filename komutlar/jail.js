const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has((client.config.jailhammer)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('**Bu komutu kullanabilmek için** <@&761712440542363648> **Yetkisine Sahip Olman Gerek**').setColor("Black"));
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('**Bir üye etiketlemen gerekiyor**').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send("**Lütfen Bir Sebep Yazınız**").then(m => m.delete({timeout: 5000}))
  message.guild.members.cache.get(member.id).roles.cache.forEach(r => {
message.guild.members.cache.get(member.id).roles.remove(r)

   message.react((client.config.onayemoji))
})
  member.roles.add((client.config.jailrol))
     const kanal = message.guild.channels.cache.find(c => c.id == (client.config.jaillog))
    const embed1 = new Discord.MessageEmbed() 
    .setDescription(`${kullanıcı} Adlı Üye ${message.author} **Tarafından** **${reason}** Sebebi İle Hapishaneye Atıldı`)
    .setColor("RED")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  
  let embed = new Discord.MessageEmbed() 
  .setDescription(`${kullanıcı} Adlı Üyeye <@&${client.config.jailrol}> Cezalı Rolu Verildi`) 
  .setImage('https://cdn.discordapp.com/attachments/673224895756238848/673450899531628544/adalaett.gif')
  .setFooter(`Justice is the basis of property..`)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete({timeout: 5000}))
  
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezalı","yargı"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: '!jail @etiket sebep'
} 