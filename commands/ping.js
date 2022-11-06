const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'repond pong',
    permissions: 'null',
    dm: true,

    async run(bot, message, msg) {
        await message.reply(`Ping : \`${bot.ws.ping}\`ms`)
    }
}