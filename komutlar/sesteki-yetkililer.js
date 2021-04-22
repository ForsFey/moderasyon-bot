const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


if(![(client.config.transport)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

  
  
  let knave2 = ` <@&${client.config.yetkilirol1}> Rolüne sahip olup seste olmayan yetkililer.\n`;
  message.guild.roles.cache.get(message.guild.roles.cache.get((client.config.yetkilirol1)).members.map(r => {
    knave2 += !r.voice.channel ? "<@" + r.user.id + "> \n" : "";
  }));

 
  message.channel.send("" + knave2 + "").then(s => s.s);
};
module.exports.conf = {
  aliases: ["yetkilisay"]
};

module.exports.help = {
  name: "sesyt"
};
