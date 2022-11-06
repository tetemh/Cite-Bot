const Discord = require('discord.js')
const loadDataBase = require('../loader/loadDataBase')

module.exports = async bot => {

    
    bot.db = await loadDataBase()
    bot.db.connect(function() {
        console.log('DataBase connect')
    })

    console.log(`${bot.user.tag} ready !`)
}