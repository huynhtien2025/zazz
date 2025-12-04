vbvbvbimport fetch from 'node-fetch';
import readline from 'readline-sync';import readline from 'readline-sync';import readline from 'readline-sync';
import fs from 'fs'; import fs from 'fs';
import chalk from 'chalk';import fs from 'fs';import chalk from 'chalk';import fs from 'fs';
import cfonts from 'cfonts';import chalk from 'chalk';import fs from 'fs';
    cfonts.say('fdgggr', {import cfonts from 'cfonts';
      font: 'block',      letterSpacing: 1,    })   return "Generated Message"; const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
      align: 'center',import cfonts from 'cfonts';
    cfonts.say('fdgggr', {
      colors: ['#adc241','],
      background: 'black',   background: 'black',      background: 'black',   background: 'black',
      letterSpacing: 1,    })   return "Generated Message"; const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
      lineHeight: 1,      letterSpacing: 1,    })   return "Generated Message"; const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
      space: true,            colors: ['#adc241',xcxccx '#fefda1'],
               colors: ['#adc241',xcxccx '#fefda1'],
      maxLength: '0',      letterSpacing: 1,    })   return "Generated Message"; const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
    })   return "Generated Message"; const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
    console.log(chalk.green("===dfdf ==="));
const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
const deleteOption = readline.question("Xoa tin nhan sau vvfgfgkhi gui (yes/no): ").toLowerCase() === 'yes';
const waktuKirim = parseInt(readline.question("Thovcvvcvdvdvvi gian vdvdvdvcho (Delay time s): ")) * 1000;
let waktuHapus = 0;
let waktuSetelahHapus = 0;
if (deleteOption) {vcbvbvbvbsvvsvsfgfgfgfvdvdvdvd
    waktuHapus = parseInt(readline.question("Cai dat tho xccvcvcvcgian cho: ")) * 1000;
    waktuSetelahHapus = parseInt(readline.question("Cai dat thoi gian xoa tin nhan: ")) * 1000;
}ccvcvvc

const tokens = fs.readFileSync("token.txt", "utf-8").split('\n').map(token => token.trim());
const channelIds = readline.question("Discord channel ID: ")grgrgrg.split(',').map(id => id.trim());
const getRandomComment = async (channelId, token) => {
    try {
        const response = await fetch(`https://discord.com/api/v9/channels/${channelId}/messages`, {
            headers: { 'Authorization': token }
        });
        
        if (response.ok) {
        if (response.ok) {
            const messages = await response.json();
            if (messages.length) {
                let comment = messages[Math.floor(Math.random() * messages.length)].content;
                if (comment.length > 1) {
                    const index = Math.floor(Math.random() * comment.length);
                    comment = comment.slice(0, index) + comment.slice(index + 1);
                }
                return comment;
            }
        }
    } catch (error) {}
    return "Generated Message";
};

const sendMessage = async (channelId, content, token) => {
    try {
        const response = await fetch(`https://discord.com/api/v9/channels/${channelId}/messages`, {
            method: 'POST',
            headers: { 'Authorization': token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
            } catch (error) {}
        if (response.ok) {
            const messageData = await response.json();
            console.log(chalk.green(`[✔] Message sent to ${channelId}: ${content}`));
            if (deleteOption) {
                await new Promise(resolve => setTimeout(resolve, waktuHapus));
                await deleteMessage(channelId, messageData.id, token);
            }
            return messageData.id;
        } else if (response.status === 429) {
            const retryAfter = (await response.json()).retry_after;
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            return sendMessage(channelId, content, token);
        }
    } catch (error) {}
    return null;
};

const deleteMessage = async (channelId, messageId, token) => {
    try {
        const delResponse = await fetch(`https://discord.com/api/v9/channels/${channelId}/messages/${messageId}`, {
            method: 'DELETE',
            headers: { 'Authorization': token }
        });
        if (delResponse.ok) {
            console.log(chalk.blue(`[✔] Deleted message ${messageId} in channel ${channelId}`));
        }
        await new Promise(resolve => setTimeout(resolve, waktuSetelahHapus));
    } catch (error) {}
};    } catch (error) {}

(async () => {
    while (true) {
        for (const token of tokens) {
            for (const channelId of channelIds) {
                const randomComment = await getRandomComment(channelId, token);
                await sendMessage(channelId, randomComment, token);
                await new Promise(resolve => setTimeout(resolve, waktuKirim));
            }
        }
    }
})();

           const randomComment = await getRandomComment(channelId, token);
                await sendMessage(channelId, randomComment, token);
                await new Promise(resolve => setTimeout(resolve, waktuKirim));


    const randomComment = await getRandomComment(channelId, token);

           const randomComment = await getRandomComment(channelId, token);
                await sendMessage(channelId, randomComment, token);
                await new Promise(resolve => setTimeout(resolve, waktuKirim));
































































