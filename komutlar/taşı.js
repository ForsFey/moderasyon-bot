const Discord = require("discord.js");//
const { MessageEmbed } = require('discord.js')
exports.run = (client, message, args) => {//
    if(![(client.config.transport)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
    return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
          let kanal = args[1];
          let kullanici = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
          if (!kullanici) return message.channel.send(new MessageEmbed().setDescription("Taşıyacağın kişiyi etiketlemelisin!")).then(x => x.delete({timeout: 5000}))
    if (!kanal) return message.channel.send(new MessageEmbed().setDescription("Taşıyacağın kanalın İD'sini belirtmeyi unuttun.")).then(x => x.delete({timeout: 5000}))
   
    kullanici.voice.setChannel(`${kanal}`)
        .then(() =>
            message.channel.send(new MessageEmbed().setDescription(`${kullanici} **<#${kanal}>** adlı kanala taşındı.`))).then(x => x.delete({timeout: 5000}))
        .catch(console.error);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['üyeyitaşı'],
    permLevel: 0
};
exports.help = {
    name: 'taşı',
    description: 'İstediğiniz kişiniyi bir sesli kanaldan diğerine taşır.',
    usage: 'taşı [kullanıcı] [kanal id]'
};