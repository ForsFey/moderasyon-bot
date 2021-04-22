const { MessageEmbed } = require('discord.js');
const db = require('quick.db');


    exports.run = async (client, message, args) => {
        //-------------------------------------------------------------------------------\\
  if(![(client.config.teyitci)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`<a:alastra_unlem:814577112383488020> ${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
//-------------------------------------------------------------------------------\\
  
  
let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(new MessageEmbed().setDescription(`<a:alastra_unlem:814577112383488020> ${message.author}, Bir kullanıcı etiketlemelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));

if (!member) {
let isimler = db.delete(`isimler_${member.user.id}`) || [];
message.channel.send(new MessageEmbed().setColor('0x348f36').setDescription(`<a:alastra_onay:814559010844966923> ${message.author} Sana Ait isim Verilerini Sildim!`))
}
  
if(member) {
let isimler = db.delete(`isimler_${member.user.id}`) || [];
message.react((client.config.onayemoji))
message.channel.send(new MessageEmbed().setColor('0x348f36').setDescription(`<a:alastra_onay:814559010844966923> ${member} Kullanıcısına Ait isim Verilerini Sildim!`))

};
  
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["isim-sıfırla"],
    permLevel: 0,
    name: "isim-sıfırla"
  }
  
  exports.help = {
    name: "isim-sıfırla"
  };
  
  
 

