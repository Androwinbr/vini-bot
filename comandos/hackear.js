const Discord = require("discord.js")

exports.run = async (bot,message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Quem eu devo hackear?")
    if (user.id === message.author.id) return message.channel.send("Você não pode se hackear!!")
    const nomes = ["Mario de Almeida", "Maria Pereira Antonieta", "João Flavio Mesquita", "Flavinho da esquina", "Marquinho da Parafuseta", "Antonio Jacinto Pinto", "Carla da Feira"]
    const idades = ["15", "16", "17", "18", "19", "20", "25", "30", "50"]
    const emails = ["Mariodealmeida", "Mariapereiraantonieta", "JoãoFlavioMesquita", "Flavinhodaesquina", "Marquinhodaparafuseta", "Antoniojacintopinto", "Carladafeira"]
    var nome_ran = Math.floor(Math.random() * nomes.length);
    var idade_ran = Math.floor(Math.random() * idades.length);
    var nome = nomes[nome_ran]
    var idade = idades[idade_ran] 
    altera_nome = nome.split(' ');
    const email = `${emails[nome_ran]}${idade}@prankmail.com`
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hackeado com sucesso!`)
    .setDescription(`**Nome:**${nome}\
    \n**Idade:**${idade}\
    \n**email:**${email}`)

    message.channel.send(`https://cdn.discordapp.com/emojis/627912505246744636.gif?v=1`) 
    .then(message => {
        setTimeout(function() {
            message.delete()
            message.channel.send(embed)
        }, 3000);
    })
    .catch(error =>
        console.log(`Não foi possível deletar mensagens devido a: ${error}`))
}
exports.help = {
    name: "hackear"
}