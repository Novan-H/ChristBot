global.owner = [
  "6281334595342",
  ""
]
global.namabot = "ChristBot"
global.ownername = "Novan"
global.pack = "Teman Novan"
global.author = "Vann Universe!!"
global.channelname = "AI"
global.channeljid = "120363327414439215@newsletter"
global.linkgc = "https://chat.whatsapp.com/LeqoiPcdmTwLm355DSDHja"
global.linksl = "https://whatsapp.com/channel/0029VaryYTD6buMS0WFKe70y"
global.public = true
global.mess = {
    success: 'success Kaka ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Tunggu Sebentar Ya Kaka*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})