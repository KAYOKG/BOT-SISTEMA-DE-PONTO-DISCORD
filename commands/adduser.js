const Discord = require("discord.js");
const mysql = require("mysql");
const config = require('../config.json')

let con = mysql.createPool({
    host: config.mysql.conexaodb,
    user: config.mysql.userdb,
    password: config.mysql.senhadb,
    database: config.mysql.db,
});

module.exports.run = async (client, message, args) => {
    message.delete();
    let userDiscord = message.author;
    let id = args[0];
   
    if (message.member.roles.cache.has(config.required.idOwner)) return message.channel.send("Acesso Negado");
   
    if (!id) return message.channel.send("> Você deve mencionar um usuario").then((msg) => {setTimeout(function () { msg.delete() }, 8000)});
    
    con.query(`INSERT INTO staff_users (staffDiscord, servico) VALUES (?,?)`, [`<@${id}>`, 'vagabundo'], (err, rows) => {})
  
    message.channel.send(`> ${userDiscord}, alterou o ip com sucesso!`).then((msg) => {setTimeout(function () { msg.delete() }, 8000)})

};