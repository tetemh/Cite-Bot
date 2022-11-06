const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loaderCommand = require('./loader/loadCommands')
const loaderEvent = require('./loader/loadEvents')
const config = require('./config')

bot.commands = new Discord.Collection()
bot.function = {
    generateID: require('./function/generateID')
}

bot.login(config.token)

loaderEvent(bot)
loaderCommand(bot)