
const Discord = require("discord.js");
const config = require('../config.json')

// const emoji = {
//     setas: config.emojis.emojiSetas,
//     noverify: config.emojis.emojiNoVerify,
//     verify: config.emojis.emojiVerify,
//     };

module.exports = {
  run: async (client, message, args) => {
    message.delete();
    if (!message.member.permissions.has("ADMINISTATOR")) return message.reply("**Desculpa mas você não tem permissão de \`Funcionario\`!")



    const embed = new Discord.MessageEmbed()
      .setDescription(`**Bot - Controle de Ponto** \n\n Para **Iniciar** seu **Ponto** clique no botão  **Abrir Ponto**\n\n Para **Finalizar** seu **Ponto** clique no botão **Fechar Ponto** `)
      .setFooter({ text: 'By Venidici', iconURL: message.guild.iconURL({ format: "png" }) });



    let buttonsStock = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('iniciar-ponto')
          .setStyle('SUCCESS')
          .setLabel('Iniciar Ponto')
          // .setEmoji(`${emoji.verify}`)
          .setDisabled(false),
        new Discord.MessageButton()
          .setCustomId('finalizar-ponto')
          .setStyle('DANGER')
          .setLabel('Finalizar Ponto')
          // .setEmoji(`${emoji.noverify}`)
          .setDisabled(false),
      )

    message.channel.send({ embeds: [embed], components: [buttonsStock] })


  }
}