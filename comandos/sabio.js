const Discord = require("discord.js")

exports.run = (bot,message, args) => {
    const pergunta = args.slice(0).join(" ")
    if (!pergunta) return message.reply("Eu não posso responder a uma pergunta que não foi feita!!")
    var resp = ["Sim", "Não", "Talvez", "Definitivamente não", "Pode apostar que sim", "Concerteza sim!", "Claro que não"]
    const select = Math.floor(Math.random() * resp.length)
    message.reply(resp[select])
}

exports.help = {
    name: "sabio"
}