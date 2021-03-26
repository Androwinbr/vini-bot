const Discord = require("discord.js")
const bot = new Discord.Client({
    disableEveryone: true,
    disabledEvents: "TYPING_START"
})
const config = require('./config.json');

const fs = require("fs")

bot.commands = new Discord.Collection();

bot.on("ready", () => {
    console.log("Iniciado com sucesso!")
    console.log(`Tokem em utilização: ${config.token}`)
    bot.user.setActivity("Assim como linux, eu sou open-source: **vb.source**", {
        type: "PLAYING"
    })
});

fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".")
        .pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`O arquivo ${f} foi carregado com sucesso! 🙂`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let arquivocmd = bot.commands.get(command.slice(prefix.length));
    if (arquivocmd) arquivocmd.run(bot, message, args);
});

bot.login(config.token)