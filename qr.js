/* Copyright (C) 2020 Yusuf Usta.
re edited by KING-ISUWA

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./isuwabrooo/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2,2121,7];
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('King')}
${chalk.white.italic('KingString Kodu Alıcı')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('King String Kodunuz: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `KING_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('90')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Bu Kodu Kimseyle Paylaşmayın!*', MessageType.text)
            console.log(
                chalk.blue.bold('Locale kuruyorsanız node bot.js ile botu başlatabilirsiniz.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*ඉසුවා ඇ 😁🙂!මැණික ඔක කාටවත් දෙන්න එපා .text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()
