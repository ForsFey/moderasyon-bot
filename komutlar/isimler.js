const db = require('quick.db');
const { MessageEmbed } = require('discord.js')

    exports.run = async (client, message, args) => {

        
        if(![(client.config.teyitci)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
        return message.channel.send(new MessageEmbed().setDescription(`<a:alastra_unlem:814577112383488020> ${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(new MessageEmbed().setDescription(`<a:alastra_unlem:814577112383488020> ${message.author} Kullanıcı Belirtmelisin.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
        let isimler = db.get(`isimler_${member.user.id}`);
        if (!isimler) return message.channel.send(new MessageEmbed().setDescription(`<a:alastra_onaysiz:814558905778700309> ${message.author} Bu Kullanıcının Daha Öncedenki İsmi Bulunmuyor.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`bu üyenin toplamda "${isimler.length}" isim kaydı bulundu. 
            \n ${isimler.map((data, i) => `${data}`).join("\n") }`)
            .setFooter((client.config.footer))
            .setTimestamp()
        message.channel.send(embed)
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["isimler"],
        permLevel: 0,
        name: "isimler"
      }
      
      exports.help = {
        name: "isimler"
      };
      
      