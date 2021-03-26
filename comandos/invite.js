const Discord = require("discord.js")

exports.run = (bot,message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Convite")
        .setAuthor(message.author.tag)
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 2048}))
        .setDescription("Aqui esta meu link de convite:\
        \n https://discord.com/api/oauth2/authorize?client_id=808320058589446165&permissions=4094164086&scope=bot")
        .setColor("RANDOM")
    message.reply(embed)
}

exports.help = {
    name: "invite"
}