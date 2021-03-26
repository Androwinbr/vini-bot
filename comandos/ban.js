const Discord = require("discord.js")

exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(" 😒 Você não pode banir alguem sem a permissão `Banir Membros`!! 😒 ")
    let infrator = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let motivo = args.slice(1).join(" ")
    if (!args) return message.reply(" 🙄 Hmmm, eu ainda não sei ler mentes, você deve me informar quem você quer banir!!!")
    if (!infrator) return message.reply(" 🔍 Ah não, eu não encontrei ninguem com esse nome!!! 🔎 ")
    if (!motivo) return message.reply(" 🤷 Eu não gosto de banir ninguem sem pelo menos saber o motivo, você deve me informar o motivo do ban! 🤷 ")
    if (message.author.id == infrator.id) return message.reply(" 🤦 Você não pode se banir!!! 🤦 ")
    if(infrator.bannable) {
        const embed = new Discord.MessageEmbed()
          .setTitle(" 🛑 Banimento de usuario! 🛑 ")
          .setDescription(`**Banido do servidor:** ${message.guild.name} \
      \n**Banido pelo usuario:** ${message.author.tag} \
      \n**Motivo:** ${motivo}`)
          .setColor("#ed2c09")
        infrator.send(embed)
        message.channel.send(`Usuario ${infrator} banido com sucesso, quem mandou desobedecer as leis!!`)
        message.channel.send(embed)
        infrator.ban({
            reason: `Banido por ${message.author.tag} - Motivo: ${motivo}`
      })
    }else {
      message.reply("Eu não tenho permissão para banir este usuário, me dê permissão de banir e/ou suba meu cargo.")
    }
}

exports.help = {
    name: "ban"
}