const Discord = require("discord.js")
exports.run = (bot,message, args) => {
    let ping = bot.ws.ping.toFixed(2)
    const embed = new Discord.MessageEmbed()
        .setTitle(" Ping!! ")
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 2048}))
        .setDescription(` 🏓 Pong!!\n 
        ${ping} ms`)
        .setColor("RANDOM")
    message.reply(embed)
}

exports.help = {
    name: "ping"
}