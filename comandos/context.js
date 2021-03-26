const Discord = require("discord.js")

exports.run = (bot,message, args) => {
    const foto = ["","https://cdn.discordapp.com/attachments/765353540637818941/824714744505303070/unknown.png","https://cdn.discordapp.com/attachments/765353540637818941/824713873142579200/15-anus.png","https://cdn.discordapp.com/attachments/765353540637818941/812844593614684180/unknown.png","https://cdn.discordapp.com/attachments/765353540637818941/808291750271385620/unknown.png","https://cdn.discordapp.com/attachments/765353540637818941/824713716791902248/unknown.png","https://cdn.discordapp.com/attachments/765353540637818941/807761738581409842/unknown.png", "https://media.discordapp.net/attachments/765353540637818941/809386715235352616/unknown.png", "https://media.discordapp.net/attachments/765353540637818941/809386478521942056/unknown.png", "https://media.discordapp.net/attachments/765353540637818941/809384839887061002/unknown.png", "https://media.discordapp.net/attachments/765353540637818941/809385708175228980/unknown.png", "https://cdn.discordapp.com/attachments/765353540637818941/808324344261771264/unknown.png", "https://cdn.discordapp.com/attachments/765353540637818941/808322807497752607/unknown.png", "https://cdn.discordapp.com/attachments/765353540637818941/807761738581409842/unknown.png", "https://cdn.discordapp.com/attachments/765353540637818941/808326885922177074/unknown.png"]
    const select = Math.floor(Math.random() * foto.length)
    const embed = new Discord.MessageEmbed()
        .setTitle("Out of context")
        .setAuthor(message.author.tag)
        .setImage(foto[select])
        .setDescription("Você pediu um out of context, aqui esta:")
        .setColor("RANDOM")
    message.reply(embed)
}

exports.help = {
    name: "context"
}