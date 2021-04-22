const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
  let mesaj = args.slice(0).join(' ');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: '',
  usage: 'yaz'
};