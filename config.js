global.owner = ['6289510497533']  
global.mods = ['6289510497533'] 
global.prems = ['6289510497533']
global.nameowner = 'irfanff9.'
global.numberowner = '6289510497533' 
global.mail = 'irfanff014@gmail.com ' 
global.gc = 'https://chat.whatsapp.com/IxcRhH64rAwGArWftwsYJy'
global.instagram = 'https://instagram.com/irpann_kidss'
global.wm = '© irfanff9'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp Irfan \n\n\n\n\n\n wa.me/6289510497533'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//

global.btc = 'daftar dulu' 

//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//

global.lann = 'daftar'


//Daftar https://api.betabotz.org 

global.APIs = {   

  btc: 'https://api.botcahx.live'


}

global.APIKeys = { 

  'https://api.botcahx.live': 'r78O6Eq2' 

}

//


let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
