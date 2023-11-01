const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const { Client, MessageEmbed, MessageButton, MessageActionRow, Intents } = require("discord.js");
const { QuickDB } = require('quick.db');
const db = new QuickDB(); // using default driver
const mysql = require("mysql");
const moment = require("moment")


const config = require("./config.json");

let con = mysql.createPool({
    host: config.mysql.conexaodb,
    user: config.mysql.userdb,
    password: config.mysql.senhadb,
    database: config.mysql.db,
});

//////////////////////////////HANDLER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.required.prefix.toLowerCase())) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.required.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    setTimeout(() => message.delete(), 8800)
    const errCommand = new MessageEmbed()
        .setDescription('Info: O comando que você executou não existe.')

    await message.reply({ embeds: [errCommand] }).then((msg) => {setTimeout(function () { msg.delete() }, 8500)})
    }
});

client.on('interactionCreate', interaction => {
    
   

    if (interaction.customId.startsWith('iniciar-ponto')) {

        if (!interaction.member.roles.cache.has(config.required.idStaff)) return interaction.reply({
            content: 'Acesso Negado',
            ephemeral: true
        });



        con.query(`SELECT * FROM staff_users WHERE staffDiscord = '${interaction.user}'`, (err, row) => {

            if (row[0].servico === `trabalhando`) return interaction.reply({
                content: 'Você já está em serviço',
                ephemeral: true
            });

            con.query(`UPDATE staff_users SET servico = 'trabalhando' WHERE staffDiscord = '${interaction.user}'`, (err, rows) => {});

            const embed = new Discord.MessageEmbed()
                .setDescription(`${config.emojis.emojiSetas} ${interaction.user}, Seu ponto foi **INICIADO** com sucesso.`)
            interaction.reply({
                embeds: [embed],
                ephemeral: true
            })
           
            const channelLogBP = client.channels.cache.get(config.logs.baterponto)
            const logIniciouServico = new Discord.MessageEmbed()
            .setDescription(`**NOVO PONTO INICIADO** \n\n*Membro:* ${interaction.user} | ${interaction.user.id} \n*Inicio: *<t:${moment(interaction.createdTimestamp).unix()}>`)
            channelLogBP.send({embeds: [logIniciouServico], ephemeral: true})

        })
    }

    if (interaction.customId.startsWith('finalizar-ponto')) {
        if (!interaction.member.roles.cache.has(config.required.idStaff)) return interaction.reply({
            content: 'Acesso Negado',
            ephemeral: true
        });


        con.query(`SELECT * FROM staff_users WHERE staffDiscord = '${interaction.user}'`, (err, row) => {

            if (row[0].servico === `vagabundo`) return interaction.reply({
                content: 'Você não está em serviço',
                ephemeral: true
            });


            const embedFinish = new Discord.MessageEmbed()
                .setDescription(`${config.emojis.emojiSetas} ${interaction.user}, Seu ponto foi **FINALIZADO** com sucesso.`)
            interaction.reply({
                embeds: [embedFinish],
                ephemeral: true
            })

            con.query(`UPDATE staff_users SET servico = 'vagabundo' WHERE staffDiscord = '${interaction.user}'`, (err, rows) => {});
           
            const channelLogBP = client.channels.cache.get(config.logs.baterponto)
            const logIniciouServico = new Discord.MessageEmbed()
            .setDescription(`**PONTO FINALIZADO** \n\n*Membro:* ${interaction.user} | ${interaction.user.id}  \n*Finalizou: *<t:${moment(interaction.createdTimestamp).unix()}>`)
            channelLogBP.send({embeds: [logIniciouServico], ephemeral: true})

        })
    }
})




 client.on('ready', () => {
            let activities = [
                `📌 Version[0.0.1]`,
                `📌 By KG#4991`,
                ''
        
            ],
                i = 0;
            setInterval(
                () =>
                    client.user.setActivity(`${activities[i++ % activities.length]}`, {
                        type: "MENTORIA",
                        url: "https://www.mentoria.venidici.com.br"
                    }),
                 1000 * 60
            );
            console.log(`✅| Bot Online!`);
        });


//////////////////////////////LICENSE BOT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

client.login(config.required.token); 