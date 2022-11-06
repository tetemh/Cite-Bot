const Discord = require('discord.js')
const config = require('../config')

module.exports = async (bot, message) => {
    if(message.content.startsWith(config.prefix)){
        var msg = message.content.split(' ')
        if(typeof bot.commands.get(msg[0].replace(config.prefix, '')) !== 'undefined') bot.commands.get(msg[0].replace(config.prefix, '')).run(bot, message, msg)
    }
}