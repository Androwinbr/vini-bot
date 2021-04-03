const Discord = require("discord.js")

exports.run = (bot,message, args) => {
    const num = ["1", "2", "3", "4", "5", "6"]
    var dado = Math.floor(Math.random() * num.length);

    message.channel.send(`E nessa incrivel tacada de dados o numero foi: ${num[dado]}`)
    message.channel.send(`Tacada feita por: ${message.author.tag}`)

}

exports.help = {
    name: "dados"
}