const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  
let guild = (client.config.sunucuid); 
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;

  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
    '0': (client.config.sayı0),
    '1': (client.config.sayı1),
    '2': (client.config.sayı2),
    '3': (client.config.sayı3),
    '4': (client.config.sayı4),                       
    '5': (client.config.sayı5),
    '6': (client.config.sayı6),
    '7': (client.config.sayı7),
    '8': (client.config.sayı8),
    '9': (client.config.sayı9)}[d];})}


  
const embed1 = new Discord.MessageEmbed()
.setColor('RANDOM')
 .setDescription(`Seste toplam **${sessayı}** kullanıcı var.`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sesli"],
  permLevel: 0
};
exports.help = {
  name: 'sesli'
}