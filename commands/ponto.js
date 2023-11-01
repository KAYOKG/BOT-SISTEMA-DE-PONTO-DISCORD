
const Discord = require("discord.js");
const config = require('../config.json')

const emoji = {
    setas: config.emojis.emojiSetas,
    noverify: config.emojis.emojiNoVerify,
    verify: config.emojis.emojiVerify,
    };

    module.exports = {
    run: async(client, message, args) => {
    message.delete();
    if(!message.member.permissions.has("ADMINISTATOR")) return message.reply("**Desculpa mas você não tem permissão de \`Funcionario\`!")
 

                            
                const embed = new Discord.MessageEmbed()
                .setDescription(`**Bot System - Controle de Ponto** \n\n${emoji.setas} Para **Iniciar** seu **Ponto** clique no botão ${emoji.verify} **Abrir Ponto**\n\n${emoji.setas} Para **Finalizar** seu **Ponto** clique no botão ${emoji.noverify} **Fechar Ponto** `)
                .setFooter({ text: 'By Venidici', iconURL: message.guild.iconURL({format: "png"}) });
            
                
               
                let buttonsStock = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                        .setCustomId('iniciar-ponto')
                        .setStyle('SUCCESS')
                        .setLabel('Iniciar')
                        .setEmoji(`${emoji.verify}`)
                        .setDisabled(false),
                        new Discord.MessageButton()
                            .setCustomId('finalizar-ponto')
                            .setStyle('DANGER')
                            .setLabel('Finalizar')
                            .setEmoji(`${emoji.noverify}`)
                            .setDisabled(false),
                )

                message.channel.send({ embeds: [embed], components: [buttonsStock]})

       
}}