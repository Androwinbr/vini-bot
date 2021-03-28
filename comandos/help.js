const Discord = require("discord.js")
const paginate = require("discord.js-pagination")
const config = require("../config.json")
let prefix = config.prefix


exports.run = (bot,message, args) => {
        const moderacao = new Discord.MessageEmbed()
        .setTitle("Moderação")
        .setDescription(`**${prefix}kick**:\
            \nComando pra expulsar alguem do servidor\
            \n**${prefix}delete**:\
            \nComando pra apagar mensagens do chat\
            \n**${prefix}ban**:\
            \nComando para banir algum usuario!!\
            \n**${prefix}unban**:\
            \nComando pra desbanir alguem`)
            .setColor("RANDOM")
        const diversao = new Discord.MessageEmbed()
            .setTitle("Diversão")
            .setDescription(`**${prefix}sabio**:\
            \nResponde a suas perguntas!`)
        const bot_com = new Discord.MessageEmbed()
            .setTitle("comandos relacionados ao bot")
            .setDescription(`**${prefix}source:**\
            \nMostra o código fonte do Bot!\
            \n**${prefix}invite**:\
            \nEnvia o link de convite do bot pra adicionar a outros servidores\
            \n**${prefix}ping**:\
            \nMostra o ping do bot\
            \n**${prefix}help**:\
            \nMostra essa tela de ajuda`)
        const other = new Discord.MessageEmbed()
            .setTitle("Outros comandos")
            .setDescription(`**${prefix}sugerir:**\
            \nManda uma sugestão e reage com os emojis "✅", "❌"; para marcação de aprovação ou negação!`)
        
        pages = [
            moderacao, diversao, bot_com, other
        ]
        paginate(message, pages)
}

exports.help = {
    name: "help"
}