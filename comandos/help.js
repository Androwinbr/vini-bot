const Discord = require("discord.js")
const config = require("../config.json")
let prefix = config.prefix


exports.run = (bot,message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("Tela de ajuda")
        .setAuthor("Linux Bot")
        .setDescription(`Os meus comandos disponiveis são: \ 
            \n\n**${prefix}context**: \ 
            \nmostra o out of context dos membros do servidor **World of Linux**. \ 
            \n\n**${prefix}invite**:\
            \nEnvia meu link de convite\
            \n\n**${prefix}kick**:\
            \nComando pra expulsar alguem do servidor\
            \n\n**${prefix}delete**:\
            \nComando pra apagar mensagens do chat
            \n\n**${prefix}help**: \ 
            \nMostra essa tela de ajuda.\
            \n\n**${prefix}ban**:\
            \nComando para banir algum usuario!!\
            \n\n**${prefix}unban**:\
            \nComando pra desbanir alguem
            \n\n**${prefix}ping:**\
            \nMostra o ping do Bot\
            \n\n**${prefix}source**:\
            \nMostra o link do código fonte do Bot`)
            .setColor("RANDOM")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 2048}))
        message.reply(embed)
}

exports.help = {
    name: "help"
}