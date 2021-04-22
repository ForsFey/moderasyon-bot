const Discord = require("discord.js"),
  client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");
const conf = require("../index.js");

module.exports.run = async (client, message, args) => {



let knaveRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if(![(client.config.owner)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 

let knaveArray = new Array();
let knaveÜyeler = knaveRole.members.forEach(knave => {knaveArray.push(`<@!${knave.id}> ( \`${knave.id}\` )`);})
if (!args[1]) {
message.channel.send((`
- ${knaveRole} rol bilgileri;
- Rol Rengi: \`${knaveRole.hexColor}\`
- Rol ID: \`${knaveRole.id}\` 
- Rol Kişi Sayısı: \`${knaveRole.members.size}\`
─────────────────
- Roldeki kişiler:
${knaveRole.members.size <= 100 ? knaveArray.join("\n") : `Listelenemedi! ( **${knaveRole.members.size}** kişi var! )`}
`))
return;
}
if (args[1] === "sayı") {
message.channel.send((`
${knaveRole} (- \`${knaveRole.id}\` ) adlı rolde toplam **${knaveRole.members.size}** kişi bulunmaktadır!
`))
return;
} else if (args[1] === "id") {
message.channel.send((`
${knaveRole} ( \`${knaveRole.name}\` ) adlı rolün ID'si: \`${knaveRole.id}\`
`))
return;
} else if (args[1] === "renk") {
message.channel.send((`
${knaveRole} ( \`${knaveRole.id}\` ) adlı rolün renk kodu: \`${knaveRole.hexColor}\`
`))
return;
} else if (args[1] === "üyeler") {
message.channel.send((`
${knaveRole} ( \`${knaveRole.id}\` ) adlı rolündeki kişiler:

─────────────────

${knaveRole.members.size <= 100 ? knaveArray.join("\n") : `Listelenemedi! ( **${knaveRole.members.size}** kişi var! )`}
`))
return;
}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["rol"],
    permLevel: 0,
    name: "rol"
  }
  
  exports.help = {
    name: "rol"
  };
  
  