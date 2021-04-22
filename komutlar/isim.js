const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has((client.config.teyitci)) && !message.member.hasPermission("ADMINISTRATOR")) return;
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!member) return message.reply("İsmini değiştirmek istediğiniz kullanıcıyı belirtip tekrar deneyin.")
  if(!args[1]) return message.reply("Değiştirmek istediğiniz kullanıcı adında isim belirtmelisin.")
  if(!args[2]) return message.reply("Değiştirmek istediğiniz kullanıcı adında yaş belirtmelisin.")
  let isim = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase()
  let yaş = args[2];
  let isimler = db.get(`isimler_${member.user.id}`);

 {
  member.setNickname(`${member.user.username.includes((client.config.tag)) ? (client.config.tag) : (client.config.tag2)} ${isim} | ${yaş}`)
      if(!isimler) {

          const knave = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          .setDescription("<a:alastra_tik:814576897567752203> <@"+member+"> üyesinin ismi başarıyla `"+isim+" | "+yaş+"` olarak değiştirildi.")
          .setColor("RANDOM")
          message.channel.send(knave).then(m => m.delete({timeout: 10000}))
          message.react((client.config.onayemoji))
      } else {
        member.setNickname(`${member.user.username.includes((client.config.tag)) ? (client.config.tag) : (client.config.tag2)} ${isim} | ${yaş}`)

          const memeaç = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(`<a:alastra_tik:814576897567752203> ${member} kişisinin ismi başarıyla \`"${isim} | ${yaş}"\` olarak değiştirildi, bu üye daha önce bu isimlerle kayıt olmuş.\n\n Kişinin toplamda **${isimler.length}** isim kayıtı bulundu.\n${isimler.map((data, i) => `${data}`).join("\n")} \n\nKişinin önceki isimlerine \`.isimler @üye\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`)
          .setColor("RANDOM")
          message.channel.send(memeaç).then(m => m.delete({timeout: 10000}))
          message.react((client.config.onayemoji))
      } 
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["i"],
  permLevel: 0,
  name: "isim"
}

exports.help = {
  name: "isim"
};

