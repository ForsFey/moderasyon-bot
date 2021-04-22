const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
      let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter(client.config.footer);
        await message.channel.send(embed.setDescription(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`));
        
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'commands',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'commands'
};