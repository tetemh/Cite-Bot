const Discord = require('discord.js')

module.exports = {
    // name: 'warn',
    // description: 'Warp membre',
    // permissions: Discord.PermissionFlagsBits.Administrator,
    // dm: false,
    // options: [
    //     {
    //         type: 'user',
    //         name: 'membre',
    //         description: 'Membre à warn',
    //         required: true,
    //     },
    //     {
    //         type: 'string',
    //         name: 'raison',
    //         description: 'Raison to warn',
    //         required: false,
    //     }
    // ],

    // async run(bot, message, args, db) {
    //     let user = args.getUser('membre')
    //     if(!user) return message.reply('Pas de membre')
    //     let member = message.guild.member.cache.get(user.id)
    //     if(!member) return message.reply('Pas de membre')
    
    //     let reason = args.getString('raison')
    //     if(!reason) reason = 'Pas de raison fournie.'

    //     if(message.user.id === user.id) return message.reply('Essaie pas de te warn !')
    //     if((await message.guild.fetchOwner()).id === user.id) return message.reply('Ne warn pas le propriétaire du serveur !')
    //     if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Tu ne peux pas warn ce membre !')
    //     if((await message.guild.fetchMe()).roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Le bot ne peut pas warn ce membre !')
    
    //     try {
    //         await user.send(`${message.user.tag} vous a warn sur le serveur ${message.guild.name} pour la raison : \`${reason}\``)
    //     } catch (err) {}

    //     await message.reply(`Vous avez warn ${user.tag} pour la raison ${reason} avec succès !`)

    //     let ID = await bot.function.generateId('WARN')
    //     db.query(`INSERT INTO ds_warns (guild, user, author, warn, reason, date) VALUES ('${message.guild.id}', '${user.id}', '${message.user.id}', '${ID}', '${reason.replace(/'/g, '\\')}', '${Date.now()}')`)
    // }
    name: 'warn',
    async run(bot, message, msg) {

        let user = msg[1]
        if(!user) return message.reply('Pas de membre')

        let user_id = user.replace('<@', '').replace('>', '')
        user = message.guild.roles.cache.get(0)

        let reason = msg[2]
        if(!reason) reason = 'Pas de raison fournie.'
        
        console.log(bot.users.cache.get(user_id).roles)

        // if(message.author.id === user_id) return message.reply('Essaie pas de te warn !')
        // if((await message.guild.fetchOwner()).id === user_id) return message.reply('Ne warn pas le propriétaire du serveur !')
        return false;
        if(message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Tu ne peux pas warn ce membre !')
        return false;
        if((await message.guild.fetchMe()).roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Le bot ne peut pas warn ce membre !')
    
        try {
            await user.send(`${message.user.tag} vous a warn sur le serveur ${message.guild.name} pour la raison : \`${reason}\``)
        } catch (err) {}

        await message.reply(`Vous avez warn ${user.tag} pour la raison ${reason} avec succès !`)

        let ID = await bot.function.generateId('WARN')
        db.query(`INSERT INTO ds_warns (guild, user, author, warn, reason, date) VALUES ('${message.guild.id}', '${user.id}', '${message.user.id}', '${ID}', '${reason.replace(/'/g, '\\')}', '${Date.now()}')`)
    
    }
}