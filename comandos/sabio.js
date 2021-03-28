const Discord = require("discord.js")

exports.run = (bot,message, args) => {
    const pergunta = args.slice(0).join(" ")
    if (!pergunta) return message.reply("Eu não posso responder a uma pergunta que não foi feita!!")
    var resp = ["Sim", "Não", "Talvez", "Definitivamente não", "Pode apostar que sim", "Concerteza sim!", "Pode repetir?", "Claro que não", "Realmente quer minha opinião?", "Te respondo depois", "Vai incomodar outra pessoa", "Talvez", "Somente o tempo responderá", "Eu te responderia, mas não quero te magoar"]
    const select = Math.floor(Math.random() * resp.length)
    message.reply(resp[select])
}

exports.help = {
    name: "sabio"
}