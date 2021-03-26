const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Você não possui permissão para isso.")

    let bannedMember = await bot.users.fetch(args[0])
    if(!bannedMember) return message.channel.send("Usuario não foi encontrado")
    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No Reason given!"
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("Você não possui permissão para isso.")|
    message.delete()
    try {
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send(`**${bannedMember.tag}** Foi desbanido com sucesso, espero que ele revise as regras dessa vez :).`)
    } catch(e) {
        console.log(e.message)
    }
}

exports.help = {
    name: "unban"
}