const Discord = require('discord.js');
const ayar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#ff06fc').setTimestamp().setThumbnail(message.author.avatarURL).setFooter(client.config.footer);
  if(!((client.config.owner))) return message.channel.send("**Roller ayarlanmamış!**").then(x => x.delete({timeout: 5000}));
  if(!message.member.roles.cache.has((client.config.owner))) return message.channel.send(embed.setDescription(`Yoklama komutunu kullanabilmek için herhangi bir yetkiye sahip değilsin.`)).then(x => x.delete({timeout: 5000}));
  if(!message.member.voice || message.member.voice.channelID != ((client.config.toplantikanal))) return;
 
  let members = message.guild.members.cache.filter(member => member.roles.cache.has((client.config.katıldırol)) && member.voice.channelID != ((client.config.toplantikanal)));
  members.array().forEach((member, index) => {
    setTimeout(() => {
      member.roles.remove((client.config.katıldırol)).catch();
    }, index * 1250)
  });
  let verildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has((client.config.katıldırol)) && !member.user.bot)
  verildi.array().forEach((member, index) => {
    setTimeout(() => {
      member.roles.add("804436542294720532").catch();
    }, index * 1250)
  });
  message.channel.send(embed.setDescription(`Katıldı rolü dağıtılmaya başlandı! 
  
   **Rol Verilecek:** ${verildi.size} 
   **Rol Alınacak:** ${members.size}`)).catch();
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yoklama"],
    permLevel: 0,
    name: "yoklama"
  }
  
  exports.help = {
    name: "yoklama"
  };
  