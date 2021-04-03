const Discord = require("discord.js")

exports.run = async (bot,message, args) => {
    const sugerir = args.slice(0).join(" ")
    if (!sugerir) return message.reply("Você precisa me informar sua sugestão tente novamente!")
    const embed = new Discord.MessageEmbed()
        .setTitle(`${sugerir}`)
        .setAuthor("Votação")
        .setDescription(`Author:${message.author.tag}`)
        .setThumbnail("https://icons.iconarchive.com/icons/iconarchive/blue-election/1024/Election-Vote-2-icon.png")
    message.delete()
    const react_msg = await message.channel.send(embed)
    try {
        await react_msg.react('✅')
        await react_msg.react('❌')
    }catch (error) {
        console.error("Erro ao reagir com os emojis")
    }

}

exports.help = {
    name: "vote"
}