const fetch = require('node-fetch');

let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} siapa presiden Indonesia`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/ai/gptvoice?query=${text}`
  conn.sendFile(m.chat, res, `openaiv.mp3`, '', m, true);
}
handler.help = ['aivoice <teks>']
handler.tags = ['tool']
handler.command = /aivoicebot/i


handler.limit = true
handler.register = true 
module.exports = handler


function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}