const Discord = require('discord.js')

module.exports = {
    name: 'test',
    async run(bot, message, msg) {

        let roleID = "1015351352496504892";
        let membersWithRole = message.guild.roles.cache.get(roleID).members;
        membersWithRole.forEach(elem => {
            console.log(elem.user)
        })
    }
}