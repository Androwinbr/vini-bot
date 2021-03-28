const Discord = require("discord.js")
const github = "https://github.com/Androwinbr/vini-bot"
exports.run = (bot,message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Github")
        .setAuthor("Linux Bot")
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 2048}))
        .setDescription(`Ei, sabia que eu sou open source? \n
        A partir do link abaixo você terá acesso ao meu codigo fonte:\n
        ${github}`)
        .setColor("#373737")
    message.reply(embed)
}

exports.help = {
    name: "source"
}