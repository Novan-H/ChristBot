require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const crypto = require('crypto')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const cheerio = require('cheerio');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const qs = require('qs');
const { cerpen } = require('./scrape/cerpen')

module.exports = async (Rifky, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Rifky.user.id.split(':')[0]+'@s.whatsapp.net' || Rifky.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Rifky.decodeJid(Rifky.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Rifky.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []
const isMedia = /image|video|sticker|audio/.test(mime)
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

try {
ppuser = await Rifky.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/s0bwo3.jpg'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: 0,
}
} catch (err) {
console.log(err)
} 

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)

    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
if (global.public === false) {
if (!m.key.fromMe && !isCreator) return
}

const qsal = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363327414439215@newsletter',
    newsletterName: 'AI',
    caption: `${namabot} | ChristBot`
}}}
const reply = (teks) => { 
Rifky.sendMessage(from, { text: teks, contextInfo:{
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: channelname,
newsletterJid: channeljid,
}, externalAdReply: { showAdAttribution: true,
mediaType:  1,
previewType: 0,
renderLargerThumbnail: true,
mediaUrl: `https://wa.me/` + `${global.owner}`,
title: `${global.namabot} || ${global.channelname}`,
sourceUrl: `https://wa.me/${global.owner}`, 
thumbnail: fkethmb
}
}},{quoted:qsal})
 }

const HannWait = () => {
let Nyaww = fs.readFileSync('./sticker/wait.webp')
Rifky.sendMessage(from, { sticker: Nyaww, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6281334595342/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `Hai ${pushname}`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
                }
            }}, { quoted: m })
        }

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

const reactionMessage = ["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮", "😵", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠"]
const randomReaction = reactionMessage[Math.floor(Math.random() * reactionMessage.length)];

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

const metaai = {
            key: { 
                 fromMe: false,
                 participant: `13135550002@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6281334595342-1625305606@g.us" } : {}) 
                       },
            message: {
                conversation: `_${global.namabot} Terverifikasi Oleh MetaAI_`
            }
        }
        
        async function sendPoll(jid, text, list) {
Rifky.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

const antisaluran = JSON.parse(fs.readFileSync("./database/antisaluran.json"))
const antisalur = m.isGroup ? antisaluran.includes(from) : false
const antibott = JSON.parse(fs.readFileSync("./database/antibot.json"))
const antibot = m.isGroup ? antibott.includes(from) : false
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./lib/register.js')
        const isRegistered = checkRegisteredUser(m.sender)
        
if (antisalur) {
    if (budy.match(`whatsapp.com/channel`)) {
if (isAdmins) return
if (m.key.fromMe) return
if (isCreator) return
               await Rifky.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Rifky.sendMessage(from, {text:`\`\`\`「 Saluran Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
    }
    
    if (antibot) {
    if (!m.isGroup) return;
    if (m.fromMe) return true;
    if (m.isBaileys && m.fromMe == false) {

            reply("*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)");
            await sleep(1000);

            if (!isAdmins && isBotAdmins) {
                await Rifky.groupParticipantsUpdate(m.chat, [m.sender], "remove");  
            }
        }
    }

switch(command) {
case 'menu': case 'help': case 'allmenu': case 'haidar':{
await HannWait()
let anu = `
┌ ❏ Info Bot
│
├❫ Nama Bot: ${global.namabot}
├❫ Nama Owner: ${global.ownername} 
│
└ ❍ 

┌ ❏ Ai Menu
│
├❫ ${prefix}gemini
├❫ ${prefix}morphic
├❫ ${prefix}songai
├❫ ${prefix}tomoe
├❫ ${prefix}prodia
├❫ ${prefix}editee
├❫ ${prefix}txt2img
├❫ ${prefix}kurumi
├❫ ${prefix}kurumi-chat
├❫ ${prefix}gpt4
├❫ ${prefix}tts
│
└ ❍ 

┌ ❏ Downloader Menu
│
├❫ ${prefix}tiktok
├❫ ${prefix}tt2
├❫ ${prefix}ttslide
├❫ ${prefix}igmp4
├❫ ${prefix}igdl
├❫ ${prefix}videy
├❫ ${prefix}gdrive
├❫ ${prefix}sfile
├❫ ${prefix}meidafire
├❫ ${prefix}aio
├❫ ${prefix}goredl
│
└ ❍ 

┌ ❏ Tools Menu
│
├❫ ${prefix}play
├❫ ${prefix}pin
├❫ ${prefix}gsmarena
├❫ ${prefix}readmore
├❫ ${prefix}rangkum
├❫ ${prefix}drakor
├❫ ${prefix}gimage
├❫ ${prefix}kbbi-kemdikbud
├❫ ${prefix}photoleap
├❫ ${prefix}picsum
├❫ ${prefix}nextlibur
├❫ ${prefix}lahelu
├❫ ${prefix}npms
├❫ ${prefix}playstore
├❫ ${prefix}pixiv
├❫ ${prefix}pixeldrain
├❫ ${prefix}quote
├❫ ${prefix}spotifysearch
├❫ ${prefix}ttp
├❫ ${prefix}quote
├❫ ${prefix}rvo
├❫ ${prefix}pahlawannasional
├❫ ${prefix}gunungmeletus
├❫ ${prefix}quotes
├❫ ${prefix}elonmu-news
├❫ ${prefix}penerbit
├❫ ${prefix}freetogame
├❫ ${prefix}steamsearch
├❫ ${prefix}npmstalk
├❫ ${prefix}top4top
├❫ ${prefix}chord
├❫ ${prefix}ttsearch
├❫ ${prefix}tr
├❫ ${prefix}goresearch
├❫ ${prefix}filmsearch
├❫ ${prefix}grupsearch
├❫ ${prefix}trackip
├❫ ${prefix}get
├❫ ${prefix}fdroid
├❫ ${prefix}styletext
├❫ ${prefix}cinema
├❫ ${prefix}cerpen
├❫ ${prefix}quotess
├❫ ${prefix}quoted
├❫ ${prefix}freepik
├❫ ${prefix}vtuber
├❫ ${prefix}bukalapak
├❫ ${prefix}-cita-cita
├❫ ${prefix}lk21
├❫ ${prefix}wattpad
│
└ ❍ 

┌ ❏ Islam Menu
│
├❫ ${prefix}quran
├❫ ${prefix}doaharian
├❫ ${prefix}kisahnabi
├❫ ${prefix}surah
├❫ ${prefix}jadwalsholat
│
└ ❍ 

┌ ❏ Anime Menu
│
├❫ ${prefix}bluearchive
├❫ ${prefix}animecharacter
├❫ ${prefix}waifu
├❫ ${prefix}quotesanime
├❫ ${prefix}kiryuu
├❫ ${prefix}9anime
├❫ ${prefix}webtoon
│
└ ❍ 

┌ ❏ Owner Menu
│
├❫ ${prefix}self
├❫ ${prefix}public
├❫ ${prefix}everyone
├❫ ${prefix}join
├❫ ${prefix}userjid
├❫ ${prefix}sendfitur
├❫ ${prefix}nowa
│
└ ❍ 

┌ ❏ Game Menu
│
├❫ ${prefix}clan create
├❫ ${prefix}clan join
├❫ ${prefix}clan approve
├❫ ${prefix}clan war
├❫ ${prefix}clan list
├❫ ${prefix}clan leave
├❫ ${prefix}clan delete
├❫ ${prefix}clan member
├❫ ${prefix}clan missions
├❫ ${prefix}clan task
├❫ ${prefix}clan upgrade
├❫ ${prefix}clan tournament
├❫ ${prefix}werewolf
│
└ ❍ 

┌ ❏ User Menu
│
├❫ ${prefix}daftar
│
└ ❍ 

┌ ❏ Group Menu
│
├❫ ${prefix}antibot
├❫ ${prefix}antisaluran
│
└ ❍ 

┌ ❏ Fun Menu
│
├❫ ${prefix}top
├❫ ${prefix}putar
├❫ ${prefix}yesorno
│
└ ❍ 

┌ ❏ Cerpen Menu
│
├❫ ${prefix}cerpen-anak
├❫ ${prefix}cerpen-bahasadaerah
├❫ ${prefix}cerpen-bahasainggris
├❫ ${prefix}cerpen-bahasajawa
├❫ ${prefix}cerpen-bahasasunda
├❫ ${prefix}cerpen-budaya
├❫ ${prefix}cerpen-cinta
├❫ ${prefix}cerpen-cintaislami
├❫ ${prefix}cerpen-cintapertama
├❫ ${prefix}cerpen-cintaromantis
├❫ ${prefix}cerpen-cintasegitiga
├❫ ${prefix}cerpen-cintasedih
├❫ ${prefix}cerpen-cintasejati
├❫ ${prefix}cerpen-galau
├❫ ${prefix}cerpen-gokil
├❫ ${prefix}cerpen-inspiratif
├❫ ${prefix}cerpen-jepang
├❫ ${prefix}cerpen-kehidupan
├❫ ${prefix}cerpen-keluarga
├❫ ${prefix}cerpen-kisahnyata
├❫ ${prefix}cerpen-korea
├❫ ${prefix}cerpen-kristen
├❫ ${prefix}cerpen-liburan
├❫ ${prefix}cerpen-malaysia
├❫ ${prefix}cerpen-mengharukan
├❫ ${prefix}cerpen-misteri
├❫ ${prefix}cerpen-motivasi
├❫ ${prefix}cerpen-nasihat
├❫ ${prefix}cerpen-nasionalisme
├❫ ${prefix}cerpen-nasihat
├❫ ${prefix}cerpen-olahraga
├❫ ${prefix}cerpen-patahhati
├❫ ${prefix}cerpen-penantian
├❫ ${prefix}cerpen-pendidikan
├❫ ${prefix}cerpen-pengalaman
├❫ ${prefix}cerpen-pengorbanan
├❫ ${prefix}cerpen-penyesalan
├❫ ${prefix}cerpen-perjuangan
├❫ ${prefix}cerpen-perpisahan
├❫ ${prefix}cerpen-persahabatan
├❫ ${prefix}cerpen-petualangan
├❫ ${prefix}cerpen-ramadhan
├❫ ${prefix}cerpen-remaja
├❫ ${prefix}cerpen-rindu
├❫ ${prefix}cerpen-rohani
├❫ ${prefix}cerpen-romantis
├❫ ${prefix}cerpen-sastra
├❫ ${prefix}cerpen-sedih
├❫ ${prefix}cerpen-sejarah
│
└ ❍ 

┌ ❏ Voice Changer Menu
│
├❫ ${prefix}bass
├❫ ${prefix}blown
├❫ ${prefix}deep
├❫ ${prefix}earrape
├❫ ${prefix}fast
├❫ ${prefix}fat
├❫ ${prefix}nightcore
├❫ ${prefix}reverse
├❫ ${prefix}robot
├❫ ${prefix}slow
├❫ ${prefix}smooth
├❫ ${prefix}squirrel
│
└ ❍ 

> 〤 ${namabot} 〻
`
let messageContent = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': anu
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./thumb.png')}, { upload: Rifky.waUploadToServer})), 
                  'title': ``,
                  'gifPlayback': true,
                  'subtitle': global.namabot,
                  'hasMediaAttachment': false  
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"\",\"url\":\" https://whatsapp.com/channel/0029VaryYTD6buMS0WFKe70y\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0"
            })
          })
        }
      }
    }, {});

    return await Rifky.relayMessage(m.chat, messageContent.message, {})
 }
break
case 'nowa': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!q) return reply(`insert Number, example: ${prefix+command} 62853388888xxx`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('Enter the suffix x to find the number?')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')]: ''
var random_length = countInstances(noteks, 'x')
if (random_length > 4) {
 return m.reply('Maaf, hanya bisa mencari nomor dengan maksimal 4 x')
}
var random;
m.reply('Loading')
if (random_length == 1) {
 random = 10
} else if (random_length == 2) {
 random = 100
} else if (random_length == 3) {
 random = 1000
} else if (random_length == 4) {
 random = 10000
}
var nomerny = `Have a bio\n`
var no_bio = `\nWithout Bio / Default bio.\n`
var no_watsap = `\nNot registered on whatsapp\n`
var data = {}
for (let i = 0; i < random; i++) {
 var nu = ['1','2','3','4','5','6','7','8','9']
 var t1 = nu[Math.floor(Math.random() * nu.length)]
 var t2 = nu[Math.floor(Math.random() * nu.length)]
 var t3 = nu[Math.floor(Math.random() * nu.length)]
 var t4 = nu[Math.floor(Math.random() * nu.length)]
 var rndm;
 if (random_length == 1) {
 rndm = `${t1}`
 } else if (random_length == 2) {
 rndm = `${t1}${t2}`
 } else if (random_length == 3) {
 rndm = `${t1}${t2}${t3}`
 } else if (random_length == 4) {
 rndm = `${t1}${t2}${t3}${t4}`
 }
 var anu = await Rifky.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
 var anuu = anu.length !== 0 ? anu: false
 try {
 try {
 var anu1 = await Rifky.fetchStatus(anu[0].jid)
 } catch {
 var anu1 = '401'
 }
 if (anu1 == '401' || anu1.status.length == 0) {
 no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
 } else {
 const year = moment(anu1.setAt).tz('Asia/Jakarta').format('YYYY');
 if (!(year in data)) {
 data[year] = [];
 }
 data[year].push(`wa.me/${anu[0].jid.split("@")[0]}\nBio : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`);
 }
 } catch {
 no_watsap += `${nomer0}${i}${nomer1}\n`
 }
}
const bio = Object.keys(data)
.map((key) => {
 return `*[ ${key} ]*\n${data[key].join('')}`
})
.join('\n')
const hasil = `Results of\n${noteks}:\n\n${nomerny}${bio}${no_bio}${no_watsap}\n\n.`
m.reply(hasil)
}
break
case 'daftar':
                if (isRegistered) return reply('Kamu sudah terdaftar')
                if (!q.includes('.')) return reply('Bukan Begitu Kak, Gini .daftar namamu.umurmu')
                const namaUser = q.substring(0, q.indexOf('.') - 0)
                const umurUser = q.substring(q.lastIndexOf('.') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
				mzd = `Kamu telah terdaftar dengan informasi sebagai berikut:\n\n⭔ Nama : ${namaUser}\n⭔ Umur : ${umurUser}\n⭔ Nomor : wa.me/${sender.split("@")[0]}\n⭔ NS : ${serialUser}`
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Rifky.sendMessage(m.chat, {image: fkethmb, caption: mzd, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6281334595342/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${pushname} Telah Terdaftar`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
                }
            }})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    Rifky.sendMessage(m.chat, {image: fkethmb, caption: mzd, contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6281334595342/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${pushname} Telah Terdaftar`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "",
                    thumbnail: fkethmb
                }
            }})
                    
                }
		break
case 'cerpen-anak':{
let hasil = await cerpen(`anak`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`)
m.reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`)
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`)
}
break
case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    runprefixagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    Rifky.werewolf = Rifky.werewolf ? Rifky.werewolf : {};
    const ww = Rifky.werewolf ? Rifky.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        Rifky.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(Rifky. chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(Rifky. chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await runprefixagi(Rifky. chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${Rifky.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    await Rifky.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }
                        // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Rifky.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await Rifky.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${Rifky.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

                    await Rifky.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${Rifky.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
                    await Rifky.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${Rifky.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

                    await Rifky.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await Rifky.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(Rifky. chat, ww);
    } else      if (value === "kill") { 
    let byId = getPlayerById2(sender, parseInt(target), ww)
         if (dataPlayer(sender, ww).role !== "werewolf") 
             return m.reply("Peran ini bukan untuk kamu"); 
         if (byId.db.role === "sorcerer") 
             return m.reply("Tidak bisa menggunakan skill untuk teman"); 
                  if (playerOnGame(sender, ww) === false)
        return m.reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return m.reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return m.reply("Gunakan hanya nomor")    
    if (byId.db.isdead === true) 
        return m.reply("Player sudah mati")
    if (byId.db.id === sender)
        return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return m.reply("Player tidak terdaftar")
      m.reply("Berhasil membunuh player " + parseInt(target)) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
                 killWerewolf(sender, parseInt(target), ww); 
             }); 
     } else if (value === "dreamy") { 
         if (dataPlayer(sender, ww).role !== "seer") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return m.reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return m.reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return m.reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return m.reply("Player sudah mati")
    if (byId.db.id === sender)
        return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return m.reply("Player tidak terdaftar")
         let dreamy = dreamySeer(m.sender, parseInt(target), ww); 
         m.reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "deff") { 
         if (dataPlayer(sender, ww).role !== "guardian") 
             return m.reply("Peran ini bukan untuk kamu"); 
                  if (playerOnGame(sender, ww) === false)
        return m.reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return m.reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return m.reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return m.reply("Player sudah mati")
    if (byId.db.id === sender)
        return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return m.reply("Player tidak terdaftar")
         m.reply(`Berhasil melindungi player ${target}`).then(() => { 
             protectGuardian(m.sender, parseInt(target), ww); 
             dataPlayer(sender, ww).status = true; 
         }); 
     } else if (value === "sorcerer") { 
         if (dataPlayer(sender, ww).role !== "sorcerer") 
             return m.reply("Peran ini bukan untuk kamu"); 
             if (playerOnGame(sender, ww) === false)
        return m.reply("Kamu tidak dalam sesi game")
    if (dataPlayer(sender, ww).status === true)
        return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
    if (dataPlayer(sender, ww).isdead === true)
        return m.reply("Kamu sudah mati")
    if (!target || target.length < 1 || target.split('').length > 2) 
        return m.reply(`Masukan nomor player \nContoh : \n${prefix + command} kill 1`)
    if (isNaN(target)) 
        return m.reply("Gunakan hanya nomor")
    let byId = getPlayerById2(sender, parseInt(target), ww)
    if (byId.db.isdead === true) 
        return m.reply("Player sudah mati")
    if (byId.db.id === sender)
        return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
    if (byId === false) 
        return m.reply("Player tidak terdaftar")
         let sorker = sorcerer(sesi(m.sender), target); 
          m.reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
             .then(() => { 
                 dataPlayer(sender, ww).status = true; 
             }); 
     } else if (value === "vote") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return m.reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return m.reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return m.reply("Masukan nomor player");
        if (isNaN(target)) return m.reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return m.reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return m.reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return m.reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return m.reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        let exitww = `${sender.split("@")[0]} Keluar dari permainan`
                Rifky.sendMessage(
            m.chat, {
                text: exitww,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: sender,
                },
            }, {
                quoted: m
            }
        );  
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        m.reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        Rifky.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
    let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        Rifky.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break
case "clan":
  case "clans":
    {
      if (!m.isGroup) return m.reply(mess.OnlyGrup);
      let jimp = require("jimp");
      const resizeImage = async (image, width, height) => {
        const readImage = await jimp.read(image);
        const resizedImage = await readImage
          .resize(width, height)
          .getBufferAsync(jimp.MIME_JPEG);
        return resizedImage;
      };

      let thumbUrl = "https://telegra.ph/file/048d31385faac531d20c6.jpg";
      const {
        playerOnClan,
        readClans,
        writeClans,
        setMissions,
        upgradeMissonProgress,
        updateClanTaskProgress,
        upgradeClanLevel,
        simulateWinner,
        getClanData,
        saveClanData,
        saveTournamentData,
      } = require("./lib/clan");

      async function startNextMatch(tournament) {
        let nextMatch = tournament.matches.find(
          (match) => match.status === "pending",
        );
        if (!nextMatch) {
          tournament.status = "completed";
          clans.currentTournament = null;

          let winnerClan = tournament.participants[0];
          let winningClanData = await getClanData(winnerClan);

          winningClanData.power += 1000;
          winningClanData.level += 5;

          saveClanData(winnerClan, winningClanData);

          await m.reply(
            `The tournament ${tournament.name} is over! The winner is ${winnerClan}. This clan receives 1000 power and advances 5 levels.`,
          );
          return;
        }

        let clan1Data = await getClanData(nextMatch.clan1);
        let clan2Data = await getClanData(nextMatch.clan2);

        nextMatch.status = "ongoing";
        writeClans(clans);

        let winner = simulateWinner(clan1Data, clan2Data);
        nextMatch.winner = winner;
        nextMatch.status = "completed";

        tournament.participants = tournament.participants.filter(
          (clan) =>
            clan !==
            (winner === clan1Data.clan ? clan2Data.clan : clan1Data.clan),
        );

        writeClans(clans);

        await m.reply(
          `The match between ${clan1Data.clan} and ${clan2Data.clan} is over! The winner is ${winner}.`,
        );

        setTimeout(() => startNextMatch(tournament), 5000);
      }

      const { sender, chat } = m;
      const clans = readClans();
      const clanData = clans[chat];
      const action = args[0];
      const param1 = args[1];
      const param2 = args[2];

      switch (action) {
        case "create":
          let existingUserClan = Object.values(clans).find(
            (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
          );
          if (existingUserClan) return m.reply("You already have a clan.");
          let createText = `*Hooray, Clan created successfully*`;
          clans[param1] = {
            room: param1,
            owner: sender.replace("@s.whatsapp.net", ""),
            status: false,
            clan: param1,
            members: [],
            joinRequests: [],
            level: 1,
            warLimit: 5,
            currentWarCount: 0,
            missions: {
              daily: {
                description: "Recruit 5 new members",
                progress: 0,
                target: 5,
                reward: 100,
              },
              weekly: {
                description: "Win 3 wars",
                progress: 0,
                target: 3,
                reward: 500,
              },
            },
            clanTasks: {
              description: "Reach level 3",
              progress: 1,
              target: 3,
              reward: 300,
            },
          };
          createText += `\n\nTo join clans, please type .clan join your clan name.`;
          writeClans(clans);
          await m.reply(createText.trim());
          break;

        case "join":
          if (!param1)
            return m.reply(
              "Please enter the name of the clan you want to join.",
            );

          let userClanCheck = Object.values(clans).find(
            (c) => c.members && c.members.some((m) => m.id === sender),
          );
          if (userClanCheck)
            return m.reply("You are already part of another clan.");

          let targetJoinClan = Object.values(clans).find(
            (c) => c.clan === param1,
          );
          if (!targetJoinClan)
            return m.reply("The clan you want to join was not found.");
          if (playerOnClan(sender, chat, clans) === true)
            return m.reply("You are already part of this clan.");

          let joinData = {
            id: sender,
            number: targetJoinClan.members
              ? targetJoinClan.members.length + 1
              : 1,
            session: chat,
            status: false,
            clan: param1,
            vote: 0,
            isVote: false,
          };

          if (!targetJoinClan.joinRequests) {
            targetJoinClan.joinRequests = [];
          }

          targetJoinClan.joinRequests.push(joinData);
          writeClans(clans);

          let joinText = `Join request has been sent to clan ${targetJoinClan.clan}. Await approval from the clan leader.`;
          m.reply(joinText);
          break;

        case "approve":
          if (!param1)
            return m.reply(
              "Please enter the name of the clan you want to view.",
            );
          let approveClan = Object.values(clans).find(
            (c) => c.clan === param1,
          );
          if (!approveClan) return m.reply("Clan not found.");

          if (approveClan.owner !== sender.replace("@s.whatsapp.net", ""))
            return m.reply(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveClan.joinRequests ||
            approveClan.joinRequests.length === 0
          )
            return m.reply(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (param2 === "all") {
                let approvedMembers = [];
                approveClan.joinRequests.forEach((request) => {
                  targetJoinClan.members.push({
                    id: request.id,
                    number: approveClan.members.length + 1,
                    sesi: chat,
                    status: false,
                    clan: request.clan,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveClan.joinRequests = [];
writeClans(clans);
} else if (param2) {
  let index = parseInt(param2) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveClan.joinRequests.length
  )
    return m.reply("Invalid index number.");

  let requester = approveClan.joinRequests[index];
  approveClan.joinRequests.splice(index, 1);
  approveClan.members.push({
    id: requester.id,
    number: approveClan.members.length + 1,
    session: chat,
    status: false,
    clan: requester.clan,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeClans(clans);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveClan.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.clan approve [index number]'";
  return m.reply(pendingRequestsText.trim());
}

await m.reply(approveText);
break;

case "war":
  let warInitiatorClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!warInitiatorClan)
    return m.reply("You do not have a clan to start a war.");

  if (warInitiatorClan.currentWarCount >= warInitiatorClan.warLimit)
    return m.reply(
      `Your daily war limit has been reached (${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}).`,
    );

  let warTargetClan = Object.values(clans).filter(
    (c) => c.clan !== warInitiatorClan.clan,
  );
  if (warTargetClan.length === 0)
    return m.reply(
      "No other clans found for war.",
    );

  warTargetClan =
    warTargetClan[Math.floor(Math.random() * warTargetClan.length)];

  if (warInitiatorClan.war || warTargetClan.war)
    return m.reply(
      "One or both clans are currently in a state of war.",
    );

  let initiatorPower =
    warInitiatorClan.level * warInitiatorClan.members.length;
  let targetPower =
    warTargetClan.level * warTargetClan.members.length;
  let winnerClan =
    initiatorPower >= targetPower
      ? warInitiatorClan
      : warTargetClan;
  let loserClan =
    initiatorPower < targetPower ? warInitiatorClan : warTargetClan;
  let warReward = Math.floor(Math.random() * 3) + 1;

  winnerClan.level += 1; 
  winnerClan.warLimit += warReward;
  winnerClan.currentWarCount += 1;
  loserClan.currentWarCount += 1;

  if (winnerClan.missions && winnerClan.missions.daily) {
    if (
      winnerClan.missions.daily.description.includes("Reach level")
    ) {
      winnerClan.missions.daily.progress = winnerClan.level;
      if (
        winnerClan.missions.daily.progress >=
        winnerClan.missions.daily.target
      ) {
        winnerClan.warLimit += winnerClan.missions.daily.reward;
        winnerClan.missions.daily.completed = true;
      }
    }
  }

  if (winnerClan.missions && winnerClan.missions.weekly) {
    if (
      winnerClan.missions.weekly.description.includes("Reach level")
    ) {
      winnerClan.missions.weekly.progress = winnerClan.level;
      if (
        winnerClan.missions.weekly.progress >=
        winnerClan.missions.weekly.target
      ) {
        winnerClan.warLimit += winnerClan.missions.weekly.reward;
        winnerClan.missions.weekly.completed = true;
      }
    }
  }

  let warResultText = `*War Result:*\n\n`;
  warResultText += `Winner: ${winnerClan.clan} (Level ${winnerClan.level})\n`;
  warResultText += `Loser: ${loserClan.clan} (Level ${loserClan.level})\n`;
  warResultText += `Clan ${winnerClan.clan} receives an additional war limit reward of ${warReward}.\n\n`;
  warResultText += `Daily war count for ${warInitiatorClan.clan}: ${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}`;
  writeClans(clans);
  await m.reply(warResultText.trim());
  break;

case "list":
  let listText = `*List of Clans:*\n\n`;
  for (let clanKey in clans) {
    if (
      clanKey === "tournaments" ||
      clanKey === "currentTournament"
    )
      continue;

    let clan = clans[clanKey];
    if (clan && clan.members) {
      let warLimitDisplay =
        clan.warLimit !== null && clan.warLimit !== undefined
          ? clan.warLimit
          : 3;
      listText += `Clan Name: ${clan.clan}\n`;
      listText += `Level: ${clan.level}\n`;
      listText += `Number of Members: ${clan.members.length}\n`;
      listText += `Daily War Limit: ${clan.currentWarCount}/${warLimitDisplay}\n\n`;
    }
  }
  await m.reply(listText.trim());
  break;

case "leave":
  let userClan = Object.values(clans).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  if (!userClan)
    return m.reply("You are not part of any clan.");

  userClan.members = userClan.members.filter(
    (m) => m.id !== sender,
  );
  writeClans(clans);
  await m.reply(`You have left the clan ${userClan.clan}.`);
  break;

case "delete":
  let deleteClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!deleteClan)
    return m.reply("You do not have a clan to delete.");

  delete clans[deleteClan.clan];
  writeClans(clans);
  await m.reply(`Clan ${deleteClan.clan} has been deleted.`);
  break;

case "member":
  let targetClanMember = Object.values(clans).find(
    (c) => c.clan === param1,
  );
  if (!targetClanMember)
    return m.reply("The clan you are looking for was not found.");

  let memberText = `*List of Members in Clan ${targetClanMember.clan}:*\n\n`;
  targetClanMember.members.forEach((member, index) => {
    memberText += `${index + 1}. @${member.id.replace("@s.whatsapp.net", "")}\n`;
  });
  await m.reply(memberText.trim());
  break;

case "missions":
  let missionsClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!missionsClan)
    return m.reply("You do not have a clan to view missions.");

  let missionsText = `*Clan ${missionsClan.clan} Missions:*\n\n`;
  if (missionsClan.missions && missionsClan.missions.daily) {
    missionsText += `Daily Mission: ${missionsClan.missions.daily.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.daily.progress}/${missionsClan.missions.daily.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.daily.reward}\n\n`;
  }
  if (missionsClan.missions && missionsClan.missions.weekly) {
    missionsText += `Weekly Mission: ${missionsClan.missions.weekly.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.weekly.progress}/${missionsClan.missions.weekly.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.weekly.reward}\n\n`;
  }
  await m.reply(missionsText.trim());
  break;

case "task":
  let taskClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!taskClan)
    return m.reply("You do not have a clan to view tasks.");

  let taskText = `*Clan ${taskClan.clan} Tasks:*\n\n`;
  if (taskClan.clanTasks) {
    taskText += `Task Description: ${taskClan.clanTasks.description}\n`;
    taskText += `Progress: ${taskClan.clanTasks.progress}/${taskClan.clanTasks.target}\n`;
    taskText += `Reward: ${taskClan.clanTasks.reward}\n`;
  } else {
taskText += "No tasks currently.";
}
await m.reply(taskText.trim());
break;

case "upgrade":
  let upgradeClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!upgradeClan)
    return m.reply(
      "You do not have a clan to upgrade.",
    );

  let upgradeCost = upgradeClan.level * 1000; // *☘️ Example :* upgrade cost based on clan level
  if (upgradeClan.level < upgradeClan.clanTasks.target) {
    upgradeClan.level += 1;
    upgradeClan.clanTasks.progress += 1;
    writeClans(clans);
    await m.reply(
      `Clan ${upgradeClan.clan} has been successfully upgraded to level ${upgradeClan.level}.`,
    );
  } else {
    await m.reply(
      "Your clan has already reached the maximum level for the current task.",
    );
  }
  break;

case "tournament":
  const subAction = param1;

  switch (subAction) {
    case "create":
      if (!param2)
        return m.reply(
          "Please enter the name of the tournament you want to create.",
        );

      let tournamentName = param2;
      if (!clans.tournaments) {
        clans.tournaments = {};
      }

      if (clans.currentTournament)
        return m.reply(
          "A tournament is currently ongoing. Please wait until the current tournament is over.",
        );

      if (clans.tournaments[tournamentName])
        return m.reply("A tournament with that name already exists.");

      clans.currentTournament = tournamentName;

      clans.tournaments[tournamentName] = {
        name: tournamentName,
        participants: [],
        status: "pending",
        matches: [],
      };

      writeClans(clans);
      await m.reply(`Tournament ${tournamentName} has been successfully created.`);
      break;

    case "join":
      let currentTournamentName = clans.currentTournament;
      if (!currentTournamentName)
        return m.reply("No tournament is currently ongoing.");

      let joinTournament = clans.tournaments[currentTournamentName];

      let joinUserClan = Object.values(clans).find(
        (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
      );
      if (!joinUserClan)
        return m.reply(
          "You do not have a clan to join the tournament.",
        );

      if (joinTournament.participants.includes(joinUserClan.clan))
        return m.reply("Your clan is already registered for this tournament.");

      joinTournament.participants.push(joinUserClan.clan);
      writeClans(clans);
      await m.reply(
        `Clan ${joinUserClan.clan} has been successfully registered for the ${currentTournamentName} tournament.`,
      );
      break;

    case "start":
      let startTournamentName = clans.currentTournament;
      if (!startTournamentName)
        return m.reply("No tournament is currently ongoing.");

      let startTournament = clans.tournaments[startTournamentName];

      if (startTournament.status !== "pending")
        return m.reply("The tournament has already started or ended.");

      if (
        startTournament.participants.length < 2 ||
        startTournament.participants.length % 2 !== 0
      ) {
        return m.reply(
          "The number of tournament participants must be even and at least 2 clans to start.",
        );
      }

      startTournament.participants =
        startTournament.participants.sort(
          () => Math.random() - 0.5,
        );

      while (startTournament.participants.length > 1) {
        for (
          let i = 0;
          i < startTournament.participants.length;
          i += 2
        ) {
          if (startTournament.participants[i + 1]) {
            startTournament.matches.push({
              clan1: startTournament.participants[i],
              clan2: startTournament.participants[i + 1],
              status: "pending",
            });
          }
        }
        startTournament.participants =
          startTournament.participants.filter(
            (_, index) => index % 2 === 0,
          );
      }

      startTournament.status = "ongoing";
      clans.currentTournament = startTournamentName;
      writeClans(clans);

      await m.reply(`Tournament ${startTournamentName} has started!`);

      startNextMatch(startTournament);
      break;

    case "status":
      let statusTournamentName = clans.currentTournament;
      if (!statusTournamentName)
        return m.reply("No tournament is currently ongoing.");

      let statusTournament =
        clans.tournaments[statusTournamentName];

      let statusText = `*Tournament Status ${statusTournamentName}:*\n\n`;
      statusText += `Status: ${statusTournament.status}\n`;
      statusText += `Participants: ${statusTournament.participants.join(", ")}\n\n`;
      statusText += `Match List:\n`;
      statusTournament.matches.forEach((match, index) => {
        statusText += `${index + 1}. ${match.clan1} vs ${match.clan2} - ${match.status === "completed" ? "Completed" : "Pending"}\n`;
      });

      await m.reply(statusText.trim());
      break;

    default:
      await m.reply(
        "Invalid tournament command. Use create, join, start, or status.",
      );
      break;
  }
  break;

default:
  await m.reply(
    "Unknown command. Please use create, join, approve, war, list, leave, delete, member, missions, task, upgrade, or tournament.",
  );
  break;
}
}
break;
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply the Message!!')
let Lorenzoquotx = await Rifky.serializeM(await m.getQuotedObj())
if (!Lorenzoquotx.quoted) return reply('The message you are replying to is not sent by the bot')
await Lorenzoquotx.quoted.copyNForward(m.chat, true)
}
break
case 'vtuber': {
  if (!text) return reply(`Example ${prefix+command} kobo kanaeru`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
    try {
        const result = await wiki(vtuber);
        if (!result.image_url) return { error: "No such vTuber" };
        return result;
    } catch (err) {
        return { error: "No such vTuber" };
    }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VTUBER WIKI* ]

Judul: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

Rifky.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
  m.reply(e)
}
}
break
case 'antibot': {

if (!isAdmins) return
    if (!m.isGroup) return
if (args[0] === "on") {
if (antibot) return reply('Sukses Mengaktifikan Tuan✅')
antibott.push(from)
fs.writeFileSync('./database/antibot.json', JSON.stringify(antibott))
reply('Success in turning on antibot in this group')
var groupe = await Rifky.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Rifky.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTolong jika ada bot ada disini mohon di self atau mute jika ada bot maka antibot akan kena kick`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antibot) return reply('Sukses Menonaktifkan Tuan✅')
let off = antibott.indexOf(from)
antibott.splice(off, 1)
fs.writeFileSync('./database/antibot.json', JSON.stringify(antibott))
reply('Success in turning off antibot in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antisaluran': {

if (!isAdmins) return 
    if (!m.isGroup) return
if (args[0] === "on") {
if (antisalur) return reply('Sukses Mengaktifikan Tuan✅')
antisaluran.push(from)
fs.writeFileSync('./database/antisaluran.json', JSON.stringify(antisaluran))
reply('Success in turning on antisaluran in this group')
var groupe = await Rifky.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Rifky.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nBagi yang sering promosi link saluran mohon waspada`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antisalur) return reply('Sukses Menonaktifkan Tuan✅')
let off = antisaluran.indexOf(from)
antisaluran.splice(off, 1)
fs.writeFileSync('./database/antisaluran.json', JSON.stringify(antisaluran))
reply('Success in turning off antisaluran in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'spam-pairing': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
case 'kiryuu': {
async function skiryu(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://kiryuu.id/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				const linkk = [];
				const judull = [];
				const thumb = [];
				const rating = [];
				$('div.bsx > a').each(function(a, b) {
					linkk.push($(b).attr('href'))
					judull.push($(b).attr('title'))
					thumb.push($(b).find('img').attr('src').split('?resize')[0])
				})
				$('div.rating > div.numscore').each(function(c, d) {
					let rate = $(d).text();
					rating.push(rate)
				})
				for (let i = 0; i < linkk.length; i++) {
					result.push({
						judul: judull[i],
						rating: rating[i],
						thumb: thumb[i],
						link: linkk[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}
if (!text) return m.reply('```Masukan anime yang ingin di cari!!\n```')
m.reply(mess.wait)
let results = await skiryu(text)
//wm senn
if (results.length > 0) {
let message = `Hasil pencarian untuk <${text}>\n\n`;
//wm senn
results.forEach((result, index) => {
message += `*${index + 1}.* *Title:* ${result.judul}\n*Rating:* ${anime.rating}\n*Link:* ${anime.link}\n\n\n`;
 });
//wm senn
Rifky.sendMessage(m.chat, { image: { url: results[0].thumb}, caption: message }, { quoted: m })
//wm senn
 } else {
m.reply('Anime yang anda berikan tidak ada.');
}
}
break
case '9anime': {
if (!q) return m.reply(`_anime nya?_`)
const axios = require('axios');
const cheerio = require('cheerio');
// wm avz
async function AvoskyZV(keyword, m) {
  try {
// wm avz
    const searchUrl = `https://9animetv.to/search?keyword=${encodeURIComponent(keyword)}`;
// wm avz
    const { data } = await axios.get(searchUrl);
    const $ = cheerio.load(data);
// wm avz
    const animeList = [];
    // wm avz
    $('.flw-item').each((index, element) => {
      const titleElement = $(element).find('.film-name a');
      const title = titleElement.text().trim();
      const link = titleElement.attr('href');
// wm avz
      const imageUrl = $(element).find('.film-poster-img').attr('data-src');
      animeList.push({
        title,
        link: `https://9animetv.to${link}`,
        imageUrl
      });
    });
// wm avz
    if (animeList.length > 0) {
// wm avz
      let AvoskyZ = `Hasil pencarian untuk '${keyword}':\n\n`;
      animeList.forEach(anime => {
        AvoskyZ += `*Title:* ${anime.title}\n`;
        AvoskyZ += `*Link:* ${anime.link}\n`;
        AvoskyZ += `*Image URL:* ${anime.imageUrl}\n\n`;
      });
      m.reply(AvoskyZ);
    } else {
      m.reply(`Anime dengan pencarian '${keyword}' tidak ditemukan.`);
    }
// wm avz
  } catch (error) {
    console.error('Error:', error);
    m.reply('Terjadi Lagi Error.');
  }
}
AvoskyZV(`${encodeURIComponent(text)}`, m);
}
break

case 'bukalapak':{
//wm senn
async function BukaLapak(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(`https://www.bukalapak.com/products?from=omnisearch&from_keyword_history=false&search[keywords]=${search}&search_source=omnisearch_keyword&source=navbar`, {
        headers: {
          "user-agent": 'Mozilla/ 5.0(Windows NT 10.0; Win64; x64; rv: 108.0) Gecko / 20100101 Firefox / 108.0'
        }
      })
//wm senn
      const $ = cheerio.load(data);
      const dat = [];
      const b = $('a.slide > img').attr('src');
      $('div.bl-flex-item.mb-8').each((i, u) => {
        const a = $(u).find('observer-tracker > div > div');
//wm senn
        const img = $(a).find('div > a > img').attr('src');
        if (typeof img === 'undefined') return

        const link = $(a).find('.bl-thumbnail--slider > div > a').attr('href');
//wm senn
        const title = $(a).find('.bl-product-card__description-name > p > a').text().trim();
        const harga = $(a).find('div.bl-product-card__description-price > p').text().trim();
//wm senn
        const rating = $(a).find('div.bl-product-card__description-rating > p').text().trim();
        const terjual = $(a).find('div.bl-product-card__description-rating-and-sold > p').text().trim();
//wm senn
//wm senn
        const dari = $(a).find('div.bl-product-card__description-store > span:nth-child(1)').text().trim();
        const seller = $(a).find('div.bl-product-card__description-store > span > a').text().trim();
//wm senn 
        const link_sel = $(a).find('div.bl-product-card__description-store > span > a').attr('href');
//wm senn
//wm senn 
        const res_ = {
          title: title,
          rating: rating ? rating : 'No rating yet',
          terjual: terjual ? terjual : 'Not yet bought',
          harga: harga,
          image: img,
          link: link,
          store: {
            lokasi: dari,
            nama: seller,
            link: link_sel
          }
        };

        dat.push(res_);
      })
//wm senn
      if (dat.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(dat)
    } catch (err) {
//wm senn
      console.error(err)
    }
  })
}
//wm senn
if (!text) return m.reply('```Masukan nama item yang ingin di cari!!\n```')
m.reply(mess.wait)
let results = await BukaLapak(text)
//wm senn
if (results.length > 0) {
let message = `Hasil pencarian untuk <${text}>\n\n`;
//wm senn
results.forEach((result, index) => {
message += `*${index + 1}.* *${result.title}*\nHarga : ${result.harga}\nRating : ${result.rating}\nStore : ${result.store.nama}\nLokasi : ${result.store.lokasi}\nTerjual : ${result.terjual}\nLink : ${result.link}\n\n`;
 });
//wm senn
Rifky.sendMessage(m.chat, { image: { url: results[0].image}, caption: message }, { quoted: m })
//wm senn
 } else {
m.reply('Nama item yang anda berikan tidak ada.');
}
//wm senn
}
break

case 'webtoon':{
async function webtoons(query) {
//wm senn
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
//wm senn
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
//wm senn
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
//wm senn
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
//wm senn
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: $(b).find('> a').attr('href')
                }
//wm senn
                hasil.push(result)
                })
//wm senn
                resolve(hasil)
            })
            .catch(reject)
    })
}
//wm senn
if (!text) return  m.reply('Masukan judul yang ingin dicari!!\nContoh: .webtoon lookism');
let results = await webtoons(text)
if (results.length > 0) {
//wm senn
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.judul}\nLike : ${result.like}\nCreator : ${result.creator}\nGenre : ${result.genre}\nLink Baca : ${result.url}\n\n`;
 });
//wm senn
m.reply(message)
 } else {
m.reply('Tidak Ada Hasil.');
}
//wm senn
}
break

case 'lk21': {
 const query = m.body.slice(5).trim();
 if (!query) {
 return m.reply("Silakan masukkan judul film yang ingin dicari.");
 }
// wm avz
 async function avzzzz(query) {
 try {
 const response = await axios.get(`https://tv.lk21official.my/search.php?s=${query}`);
 const html = response.data;
 const $ = cheerio.load(html);
 let results = [];
// wm avz
 $('.search-item').each((index, element) => {
 const title = $(element).find('h3 a').text().trim();
 const url = 'https://tv.lk21official.my' + $(element).find('h3 a').attr('href');
 const director = $(element).find('p strong:contains("Sutradara:")').parent().text().replace("Sutradara:", "").trim();
 const cast = $(element).find('p strong:contains("Bintang:")').parent().text().replace("Bintang:", "").trim();
// wm avz
 results.push({
 title,
 url,
 director,
 cast
 });
 });
// wm avz
 return results;
 } catch (error) {
 console.error(error);
 return [];
 }
 }
// wm avz
 const results = await avzzzz(query);
 if (results.length === 0) {
 return m.reply("Tidak ditemukan hasil untuk pencarian: " + query);
 }
// wm avz
 let message = "Hasil pencarian untuk: *" + query + "*\n\n";
 results.forEach((result) => {
 message += `Title: ${result.title}\n`;
 if (result.director) {
 message += `Sutradara: ${result.director}\n`;
 }
 if (result.cast) {
 message += `Bintang: ${result.cast}\n`;
 }
 message += `Url: ${result.url}\n\n`;
 });
// wm avz
 m.reply(message);
}
break

case 'cita-cita':{
	let res = await fetch(
		"https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita.json",
	);
	let json = await res.json();
    let ngawi = pickRandom(json)
	// Assuming fsizedoc is supposed to be a variable with the desired value
	let fsizedoc = 10; // Replace 10 with the actual value you want

	await Rifky.sendMessage(
		m.chat,
		{
			audio: { url: ngawi },
			seconds: fsizedoc,
			ptt: true,
			mimetype: "audio/mpeg",
			fileName: "vn.mp3",
			waveform: [100, 0, 100, 0, 100, 0, 100],
		},
		{ quoted: m },
	);
};
break

case 'wattpad':{
//wm senn
async function WattPad(judul) {
  return new Promise(async (resolve, reject) => {
    try {
//wm senn
      const { data } = await axios.get('https://www.wattpad.com/search/' + judul, {
        headers: {
          cookie: 'wp_id=d92aecaa-7822-4f56-b189-f8c4cc32825c; sn__time=j%3Anull; fs__exp=1; adMetrics=0; _pbkvid05_=0; _pbeb_=0; _nrta50_=0; lang=20; locale=id_ID; ff=1; dpr=1; tz=-8; te_session_id=1681636962513; _ga_FNDTZ0MZDQ=GS1.1.1681636962.1.1.1681637905.0.0.0; _ga=GA1.1.1642362362.1681636963; signupFrom=search; g_state={"i_p":1681644176441,"i_l":1}; RT=r=https%3A%2F%2Fwww.wattpad.com%2Fsearch%2Fanime&ul=1681637915624',
          'suer-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0'
        }
//wm senn
      }),
        $ = cheerio.load(data),
        limk = 'https://www.wattpad.com',
        _data = [];
//wm senn
      $('.story-card-container > ul.list-group.new-list-group > li.list-group-item').each(function (i, u) {
        let link = limk + $(u).find('a').attr('href')
//wm senn
        let judul = $(u).find('a > div > div.story-info > div.title').text().trim()
        let img = $(u).find('a > div > div.cover > img').attr('src')
        let desc = $(u).find('a > div > div.story-info > .description').text().replace(/\s+/g, ' ')
//wm senn
        let _doto = []
        $(u).find('a > div > div.story-info > .new-story-stats > .stats-item').each((u, i) => {
          _doto.push($(i).find('.icon-container > .tool-tip > .sr-only').text())
        })
//wm senn
        _data.push({
          title: judul,
          thumb: img,
          desc: desc,
          reads: _doto[0],
          vote: _doto[1],
          chapter: _doto[2],
          link: link,
        })
      })
//wm senn
      resolve(_data)
    } catch (err) {
      console.error(err)
    }
  })
}
//wm senn
if (!text) return m.reply('Masukan judul yang ingin dicari!!\nContoh: .wattpad perjodohan')
//wm senn
let results = await WattPad(text)
//wm senn 
if (results.length > 0) {
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `Title : ${result.title}\nChapter : ${result.chapter}\nVote : ${result.vote}\nTotal Pembaca : ${result.reads}\nDesc : ${result.desc}\nLink Baca : ${result.link}\n\n`;
 });
//wm senn
 Rifky.sendMessage(m.chat, {image: {url: result[0].thumb}, caption: message}, {quoted: m})
//wm senn
 } else {
m.reply('Tidak Ada Hasil.');
}
//wm senn
}
break
        
        case 'text2speech': {
            function ListVoiceArray(array) {
    const modifiedArray = array.map(item => {
        const modifiedName = item.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)");
        const language = item.split('-')[0];
        return `${modifiedName} ( ${language} )`;
    });

    return modifiedArray;
}

    let ListVoice = [
        "af-ZA-AdriNeural",
        "af-ZA-WillemNeural",
        "am-ET-AmehaNeural",
        "am-ET-MekdesNeural",
        "ar-AE-FatimaNeural",
        "ar-AE-HamdanNeural",
        "ar-BH-AliNeural",
        "ar-BH-LailaNeural",
        "ar-DZ-AminaNeural",
        "ar-DZ-IsmaelNeural",
        "ar-EG-SalmaNeural",
        "ar-EG-ShakirNeural",
        "ar-IQ-BasselNeural",
        "ar-IQ-RanaNeural",
        "ar-JO-SanaNeural",
        "ar-JO-TaimNeural",
        "ar-KW-FahedNeural",
        "ar-KW-NouraNeural",
        "ar-LB-LaylaNeural",
        "ar-LB-RamiNeural",
        "ar-LY-ImanNeural",
        "ar-LY-OmarNeural",
        "ar-MA-JamalNeural",
        "ar-MA-MounaNeural",
        "ar-OM-AbdullahNeural",
        "ar-OM-AyshaNeural",
        "ar-QA-AmalNeural",
        "ar-QA-MoazNeural",
        "ar-SA-HamedNeural",
        "ar-SA-ZariyahNeural",
        "ar-SY-AmanyNeural",
        "ar-SY-LaithNeural",
        "ar-TN-HediNeural",
        "ar-TN-ReemNeural",
        "ar-YE-MaryamNeural",
        "ar-YE-SalehNeural",
        "az-AZ-BabekNeural",
        "az-AZ-BanuNeural",
        "bg-BG-BorislavNeural",
        "bg-BG-KalinaNeural",
        "bn-BD-NabanitaNeural",
        "bn-BD-PradeepNeural",
        "bn-IN-BashkarNeural",
        "bn-IN-TanishaaNeural",
        "bs-BA-GoranNeural",
        "bs-BA-VesnaNeural",
        "ca-ES-AlbaNeural",
        "ca-ES-EnricNeural",
        "ca-ES-JoanaNeural",
        "cs-CZ-AntoninNeural",
        "cs-CZ-VlastaNeural",
        "cy-GB-AledNeural",
        "cy-GB-NiaNeural",
        "da-DK-ChristelNeural",
        "da-DK-JeppeNeural",
        "de-AT-IngridNeural",
        "de-AT-JonasNeural",
        "de-CH-JanNeural",
        "de-CH-LeniNeural",
        "de-DE-AmalaNeural",
        "de-DE-BerndNeural",
        "de-DE-ChristophNeural",
        "de-DE-ConradNeural",
        "de-DE-ElkeNeural",
        "de-DE-GiselaNeural",
        "de-DE-KasperNeural",
        "de-DE-KatjaNeural",
        "de-DE-KillianNeural",
        "de-DE-KlarissaNeural",
        "de-DE-KlausNeural",
        "de-DE-LouisaNeural",
        "de-DE-MajaNeural",
        "de-DE-RalfNeural",
        "de-DE-TanjaNeural",
        "el-GR-AthinaNeural",
        "el-GR-NestorasNeural",
        "en-AU-AnnetteNeural",
        "en-AU-CarlyNeural",
        "en-AU-DarrenNeural",
        "en-AU-DuncanNeural",
        "en-AU-ElsieNeural",
        "en-AU-FreyaNeural",
        "en-AU-JoanneNeural",
        "en-AU-KenNeural",
        "en-AU-KimNeural",
        "en-AU-NatashaNeural",
        "en-AU-NeilNeural",
        "en-AU-TimNeural",
        "en-AU-TinaNeural",
        "en-AU-WilliamNeural",
        "en-CA-ClaraNeural",
        "en-CA-LiamNeural",
        "en-GB-AbbiNeural",
        "en-GB-AlfieNeural",
        "en-GB-BellaNeural",
        "en-GB-ElliotNeural",
        "en-GB-EthanNeural",
        "en-GB-HollieNeural",
        "en-GB-LibbyNeural",
        "en-GB-MaisieNeural",
        "en-GB-MiaNeural",
        "en-GB-NoahNeural",
        "en-GB-OliverNeural",
        "en-GB-OliviaNeural",
        "en-GB-RyanNeural",
        "en-GB-SoniaNeural",
        "en-GB-ThomasNeural",
        "en-HK-SamNeural",
        "en-HK-YanNeural",
        "en-IE-ConnorNeural",
        "en-IE-EmilyNeural",
        "en-IN-NeerjaNeural",
        "en-IN-PrabhatNeural",
        "en-KE-AsiliaNeural",
        "en-KE-ChilembaNeural",
        "en-NG-AbeoNeural",
        "en-NG-EzinneNeural",
        "en-NZ-MitchellNeural",
        "en-NZ-MollyNeural",
        "en-PH-JamesNeural",
        "en-PH-RosaNeural",
        "en-SG-LunaNeural",
        "en-SG-WayneNeural",
        "en-TZ-ElimuNeural",
        "en-TZ-ImaniNeural",
        "en-US-AIGenerate1Neural",
        "en-US-AIGenerate2Neural",
        "en-US-AmberNeural",
        "en-US-AnaNeural",
        "en-US-AriaNeural",
        "en-US-AshleyNeural",
        "en-US-BlueNeural",
        "en-US-BrandonNeural",
        "en-US-ChristopherNeural",
        "en-US-CoraNeural",
        "en-US-DavisNeural",
        "en-US-ElizabethNeural",
        "en-US-EricNeural",
        "en-US-GuyNeural",
        "en-US-JacobNeural",
        "en-US-JaneNeural",
        "en-US-JasonNeural",
        "en-US-JennyMultilingualNeural",
        "en-US-JennyMultilingualV2Neural",
        "en-US-JennyNeural",
        "en-US-MichelleNeural",
        "en-US-MonicaNeural",
        "en-US-NancyNeural",
        "en-US-RogerNeural",
        "en-US-RyanMultilingualNeural",
        "en-US-SaraNeural",
        "en-US-SteffanNeural",
        "en-US-TonyNeural",
        "en-ZA-LeahNeural",
        "en-ZA-LukeNeural",
        "es-AR-ElenaNeural",
        "es-AR-TomasNeural",
        "es-BO-MarceloNeural",
        "es-BO-SofiaNeural",
        "es-CL-CatalinaNeural",
        "es-CL-LorenzoNeural",
        "es-CO-GonzaloNeural",
        "es-CO-SalomeNeural",
        "es-CR-JuanNeural",
        "es-CR-MariaNeural",
        "es-CU-BelkysNeural",
        "es-CU-ManuelNeural",
        "es-DO-EmilioNeural",
        "es-DO-RamonaNeural",
        "es-EC-AndreaNeural",
        "es-EC-LuisNeural",
        "es-ES-AbrilNeural",
        "es-ES-AlvaroNeural",
        "es-ES-ArnauNeural",
        "es-ES-DarioNeural",
        "es-ES-EliasNeural",
        "es-ES-ElviraNeural",
        "es-ES-EstrellaNeural",
        "es-ES-IreneNeural",
        "es-ES-LaiaNeural",
        "es-ES-LiaNeural",
        "es-ES-NilNeural",
        "es-ES-SaulNeural",
        "es-ES-TeoNeural",
        "es-ES-TrianaNeural",
        "es-ES-VeraNeural",
        "es-GQ-JavierNeural",
        "es-GQ-TeresaNeural",
        "es-GT-AndresNeural",
        "es-GT-MartaNeural",
        "es-HN-CarlosNeural",
        "es-HN-KarlaNeural",
        "es-MX-BeatrizNeural",
        "es-MX-CandelaNeural",
        "es-MX-CarlotaNeural",
        "es-MX-CecilioNeural",
        "es-MX-DaliaNeural",
        "es-MX-GerardoNeural",
        "es-MX-JorgeNeural",
        "es-MX-LarissaNeural",
        "es-MX-LibertoNeural",
        "es-MX-LucianoNeural",
        "es-MX-MarinaNeural",
        "es-MX-NuriaNeural",
        "es-MX-PelayoNeural",
        "es-MX-RenataNeural",
        "es-MX-YagoNeural",
        "es-NI-FedericoNeural",
        "es-NI-YolandaNeural",
        "es-PA-MargaritaNeural",
        "es-PA-RobertoNeural",
        "es-PE-AlexNeural",
        "es-PE-CamilaNeural",
        "es-PR-KarinaNeural",
        "es-PR-VictorNeural",
        "es-PY-MarioNeural",
        "es-PY-TaniaNeural",
        "es-SV-LorenaNeural",
        "es-SV-RodrigoNeural",
        "es-US-AlonsoNeural",
        "es-US-PalomaNeural",
        "es-UY-MateoNeural",
        "es-UY-ValentinaNeural",
        "es-VE-PaolaNeural",
        "es-VE-SebastianNeural",
        "et-EE-AnuNeural",
        "et-EE-KertNeural",
        "eu-ES-AinhoaNeural",
        "eu-ES-AnderNeural",
        "fa-IR-DilaraNeural",
        "fa-IR-FaridNeural",
        "fi-FI-HarriNeural",
        "fi-FI-NooraNeural",
        "fi-FI-SelmaNeural",
        "fil-PH-AngeloNeural",
        "fil-PH-BlessicaNeural",
        "fr-BE-CharlineNeural",
        "fr-BE-GerardNeural",
        "fr-CA-AntoineNeural",
        "fr-CA-JeanNeural",
        "fr-CA-SylvieNeural",
        "fr-CH-ArianeNeural",
        "fr-CH-FabriceNeural",
        "fr-FR-AlainNeural",
        "fr-FR-BrigitteNeural",
        "fr-FR-CelesteNeural",
        "fr-FR-ClaudeNeural",
        "fr-FR-CoralieNeural",
        "fr-FR-DeniseNeural",
        "fr-FR-EloiseNeural",
        "fr-FR-HenriNeural",
        "fr-FR-JacquelineNeural",
        "fr-FR-JeromeNeural",
        "fr-FR-JosephineNeural",
        "fr-FR-MauriceNeural",
        "fr-FR-YvesNeural",
        "fr-FR-YvetteNeural",
        "ga-IE-ColmNeural",
        "ga-IE-OrlaNeural",
        "gl-ES-RoiNeural",
        "gl-ES-SabelaNeural",
        "gu-IN-DhwaniNeural",
        "gu-IN-NiranjanNeural",
        "he-IL-AvriNeural",
        "he-IL-HilaNeural",
        "hi-IN-MadhurNeural",
        "hi-IN-SwaraNeural",
        "hr-HR-GabrijelaNeural",
        "hr-HR-SreckoNeural",
        "hu-HU-NoemiNeural",
        "hu-HU-TamasNeural",
        "hy-AM-AnahitNeural",
        "hy-AM-HaykNeural",
        "id-ID-ArdiNeural",
        "id-ID-GadisNeural",
        "is-IS-GudrunNeural",
        "is-IS-GunnarNeural",
        "it-IT-BenignoNeural",
        "it-IT-CalimeroNeural",
        "it-IT-CataldoNeural",
        "it-IT-DiegoNeural",
        "it-IT-ElsaNeural",
        "it-IT-FabiolaNeural",
        "it-IT-FiammaNeural",
        "it-IT-GianniNeural",
        "it-IT-ImeldaNeural",
        "it-IT-IrmaNeural",
        "it-IT-IsabellaNeural",
        "it-IT-LisandroNeural",
        "it-IT-PalmiraNeural",
        "it-IT-PierinaNeural",
        "it-IT-RinaldoNeural",
        "ja-JP-AoiNeural",
        "ja-JP-DaichiNeural",
        "ja-JP-KeitaNeural",
        "ja-JP-MayuNeural",
        "ja-JP-NanamiNeural",
        "ja-JP-NaokiNeural",
        "ja-JP-ShioriNeural",
        "jv-ID-DimasNeural",
        "jv-ID-SitiNeural",
        "ka-GE-EkaNeural",
        "ka-GE-GiorgiNeural",
        "kk-KZ-AigulNeural",
        "kk-KZ-DauletNeural",
        "km-KH-PisethNeural",
        "km-KH-SreymomNeural",
        "kn-IN-GaganNeural",
        "kn-IN-SapnaNeural",
        "ko-KR-BongJinNeural",
        "ko-KR-GookMinNeural",
        "ko-KR-InJoonNeural",
        "ko-KR-JiMinNeural",
        "ko-KR-SeoHyeonNeural",
        "ko-KR-SoonBokNeural",
        "ko-KR-SunHiNeural",
        "ko-KR-YuJinNeural",
        "lo-LA-ChanthavongNeural",
        "lo-LA-KeomanyNeural",
        "lt-LT-LeonasNeural",
        "lt-LT-OnaNeural",
        "lv-LV-EveritaNeural",
        "lv-LV-NilsNeural",
        "mk-MK-AleksandarNeural",
        "mk-MK-MarijaNeural",
        "ml-IN-MidhunNeural",
        "ml-IN-SobhanaNeural",
        "mn-MN-BataaNeural",
        "mn-MN-YesuiNeural",
        "mr-IN-AarohiNeural",
        "mr-IN-ManoharNeural",
        "ms-MY-OsmanNeural",
        "ms-MY-YasminNeural",
        "mt-MT-GraceNeural",
        "mt-MT-JosephNeural",
        "my-MM-NilarNeural",
        "my-MM-ThihaNeural",
        "nb-NO-FinnNeural",
        "nb-NO-IselinNeural",
        "nb-NO-PernilleNeural",
        "ne-NP-HemkalaNeural",
        "ne-NP-SagarNeural",
        "nl-BE-ArnaudNeural",
        "nl-BE-DenaNeural",
        "nl-NL-ColetteNeural",
        "nl-NL-FennaNeural",
        "nl-NL-MaartenNeural",
        "pl-PL-AgnieszkaNeural",
        "pl-PL-MarekNeural",
        "pl-PL-ZofiaNeural",
        "ps-AF-GulNawazNeural",
        "ps-AF-LatifaNeural",
        "pt-BR-AntonioNeural",
        "pt-BR-BrendaNeural",
        "pt-BR-DonatoNeural",
        "pt-BR-ElzaNeural",
        "pt-BR-FabioNeural",
        "pt-BR-FranciscaNeural",
        "pt-BR-GiovannaNeural",
        "pt-BR-HumbertoNeural",
        "pt-BR-JulioNeural",
        "pt-BR-LeilaNeural",
        "pt-BR-LeticiaNeural",
        "pt-BR-ManuelaNeural",
        "pt-BR-NicolauNeural",
        "pt-BR-ValerioNeural",
        "pt-BR-YaraNeural",
        "pt-PT-DuarteNeural",
        "pt-PT-FernandaNeural",
        "pt-PT-RaquelNeural",
        "ro-RO-AlinaNeural",
        "ro-RO-EmilNeural",
        "ru-RU-DariyaNeural",
        "ru-RU-DmitryNeural",
        "ru-RU-SvetlanaNeural",
        "si-LK-SameeraNeural",
        "si-LK-ThiliniNeural",
        "sk-SK-LukasNeural",
        "sk-SK-ViktoriaNeural",
        "sl-SI-PetraNeural",
        "sl-SI-RokNeural",
        "so-SO-MuuseNeural",
        "so-SO-UbaxNeural",
        "sq-AL-AnilaNeural",
        "sq-AL-IlirNeural",
        "sr-Latn-RS-NicholasNeural",
        "sr-Latn-RS-SophieNeural",
        "sr-RS-NicholasNeural",
        "sr-RS-SophieNeural",
        "su-ID-JajangNeural",
        "su-ID-TutiNeural",
        "sv-SE-HilleviNeural",
        "sv-SE-MattiasNeural",
        "sv-SE-SofieNeural",
        "sw-KE-RafikiNeural",
        "sw-KE-ZuriNeural",
        "sw-TZ-DaudiNeural",
        "sw-TZ-RehemaNeural",
        "ta-IN-PallaviNeural",
        "ta-IN-ValluvarNeural",
        "ta-LK-KumarNeural",
        "ta-LK-SaranyaNeural",
        "ta-MY-KaniNeural",
        "ta-MY-SuryaNeural",
        "ta-SG-AnbuNeural",
        "ta-SG-VenbaNeural",
        "te-IN-MohanNeural",
        "te-IN-ShrutiNeural",
        "th-TH-AcharaNeural",
        "th-TH-NiwatNeural",
        "th-TH-PremwadeeNeural",
        "tr-TR-AhmetNeural",
        "tr-TR-EmelNeural",
        "uk-UA-OstapNeural",
        "uk-UA-PolinaNeural",
        "ur-IN-GulNeural",
        "ur-IN-SalmanNeural",
        "ur-PK-AsadNeural",
        "ur-PK-UzmaNeural",
        "uz-UZ-MadinaNeural",
        "uz-UZ-SardorNeural",
        "vi-VN-HoaiMyNeural",
        "vi-VN-NamMinhNeural",
        "wuu-CN-XiaotongNeural",
        "wuu-CN-YunzheNeural",
        "yue-CN-XiaoMinNeural",
        "yue-CN-YunSongNeural",
        "zh-CN-XiaochenNeural",
        "zh-CN-XiaohanNeural",
        "zh-CN-XiaomengNeural",
        "zh-CN-XiaomoNeural",
        "zh-CN-XiaoqiuNeural",
        "zh-CN-XiaoruiNeural",
        "zh-CN-XiaoshuangNeural",
        "zh-CN-XiaoxiaoNeural",
        "zh-CN-XiaoxuanNeural",
        "zh-CN-XiaoyanNeural",
        "zh-CN-XiaoyiNeural",
        "zh-CN-XiaoyouNeural",
        "zh-CN-XiaozhenNeural",
        "zh-CN-YunfengNeural",
        "zh-CN-YunhaoNeural",
        "zh-CN-YunjianNeural",
        "zh-CN-YunxiNeural",
        "zh-CN-YunxiaNeural",
        "zh-CN-YunyangNeural",
        "zh-CN-YunyeNeural",
        "zh-CN-YunzeNeural",
        "zh-CN-henan-YundengNeural",
        "zh-CN-liaoning-XiaobeiNeural",
        "zh-CN-shaanxi-XiaoniNeural",
        "zh-CN-shandong-YunxiangNeural",
        "zh-CN-sichuan-YunxiNeural",
        "zh-HK-HiuGaaiNeural",
        "zh-HK-HiuMaanNeural",
        "zh-HK-WanLungNeural",
        "zh-TW-HsiaoChenNeural",
        "zh-TW-HsiaoYuNeural",
        "zh-TW-YunJheNeural",
        "zu-ZA-ThandoNeural",
        "zu-ZA-ThembaNeural"
    ]
    let lister = ListVoiceArray(ListVoice)
    let readMore = String.fromCharCode(8206).repeat(4001);

    let query = `Input query!\n\n*Example:*\n${prefix + command} [angka]|[teks]\n\n*Pilih angka yg ada*\n` + readMore + lister.map((v, index) => "  " + (index + 1) + ". " + v).join("\n");
    
    function getParts(array, index) {
    if (isNaN(index)) {
        index = Number(index);
        if (isNaN(index)) {
            return "Indeks harus berupa nomor";
        }
    }

    const text = array[index - 1];
    const language = getLanguage(text);
    return {
        short: language,
        long: text
    };
}

function getLanguage(text) {
    const parts = text.split("-");
    return parts.slice(0, 2).join("-");
}
            
async function generateVoice(Locale = "id-ID", Voice = "id-ID-ArdiNeural", Query) {
    const formData = new FormData();
    formData.append("locale", Locale);
    formData.append("content", `<voice name="${Voice}">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
    
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply(query)
    let [atas, bawah] = text.split("|")
    if (!atas) return m.reply(query)
    if (!bawah) return m.reply(query)
    const {
        short,
        long
    } = getParts(ListVoice, atas);
    await m.reply(mess.wait + "\n" + long.replace(/(.+)-(.+)-(.+)Neural/, "$3 ($1-$2)"))

    try {
        let res = await generateVoice(short, long, bawah)
        if (res) await Rifky.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
}
break
        
        case 'tts2': {
    const lister = [
    "Adult Female #1, American English (TruVoice)",
    "Adult Female #2, American English (TruVoice)",
    "Adult Male #1, American English (TruVoice)",
    "Adult Male #2, American English (TruVoice)",
    "Adult Male #3, American English (TruVoice)",
    "Adult Male #4, American English (TruVoice)",
    "Adult Male #5, American English (TruVoice)",
    "Adult Male #6, American English (TruVoice)",
    "Adult Male #7, American English (TruVoice)",
    "Adult Male #8, American English (TruVoice)",
    "Female Whisper",
    "Male Whisper",
    "Mary",
    "Mary (for Telephone)",
    "Mary in Hall",
    "Mary in Space",
    "Mary in Stadium",
    "Mike",
    "Mike (for Telephone)",
    "Mike in Hall",
    "Mike in Space",
    "Mike in Stadium",
    "RoboSoft Five",
    "RoboSoft Four",
    "RoboSoft One",
    "RoboSoft Six",
    "RoboSoft Three",
    "RoboSoft Two",
    "Sam",
    "BonziBUDDY"
];

async function SayTTS(voice, text, pitch, speed) {
// limits = { minPitch: 50, maxPitch: 400, minSpeed: 50, maxSpeed: 250, defPitch: 140, defSpeed: 157 };
    try {
        pitch = parseInt(pitch);
        speed = parseInt(speed);

        const url = `https://tetyys.com/SAPI4/SAPI4?text=${encodeURIComponent(text)}&voice=${encodeURIComponent(voice)}&pitch=${pitch}&speed=${speed}`;

        if (text.length > 4088) {
            throw new Error("Text exceeds the maximum allowed length (1000 characters)");
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch audio: ${response.statusText}`);

        const buffer = await response.arrayBuffer();

        return Buffer.from(buffer);
    } catch (error) {
        throw error;
    }
}

async function VoiceLimitations(voice) {
    try {
        const url = `https://tetyys.com/SAPI4/VoiceLimitations?voice=${encodeURIComponent(voice)}`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch voice limitations: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        throw error;
    }
}

const readMore = String.fromCharCode(8206).repeat(4001);

const query = `Input query!\n\n*Example:*\n${prefix + command} [number]|[text]\n\n*Choose a number from the list*\n` + readMore + lister.map((v, index) => `  ${index + 1}. ${v}`).join("\n");

if (args.length < 1 && (!m.quoted || !m.quoted.text)) {
    return m.reply(query)
}

const text = args.length >= 1 ? args.join(" ") : m.quoted.text;
const [atas, bawah, kiri, kanan] = text.split("|");

if (!atas || !bawah) {
    return m.reply(query);
}
await m.reply(mess.wait + "\n" + lister[atas - 1])
try {
    const res = await SayTTS(lister[atas - 1], bawah, kiri || 140, kanan || 157);
    if (res) {
        await Rifky.sendMessage(m.chat, {
            audio: res,
            mimetype: 'audio/mp4',
            ptt: true,
            waveform: [100, 0, 100, 0, 100, 0, 100]
        }, {
            quoted: m
        });
    }
} catch (e) {
    await m.reply("Error: " + e.message);
}
}
break
        
        case 'randomgore': {
function gore() {
	return new Promise((resolve, reject) => {
		const page = Math.floor(Math.random() * 228)
		axios.get('https://seegore.com/gore/page/' + page)
			.then((res) => {
				const $ = cheerio.load(res.data)
				const link = [];
				$('ul > li > article').each(function(a, b) {
					link.push({
						title: $(b).find('div.content > header > h2').text(),
						link: $(b).find('div.post-thumbnail > a').attr('href'),
						thumb: $(b).find('div.post-thumbnail > a > div > img').attr('src'),
						view: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-views').text(),
						vote: $(b).find('div.post-thumbnail > div.post-meta.bb-post-meta.post-meta-bg > span.post-meta-item.post-votes').text(),
						tag: $(b).find('div.content > header > div > div.bb-cat-links').text(),
						comment: $(b).find('div.content > header > div > div.post-meta.bb-post-meta > a').text()
					})
				})
				const random = link[Math.floor(Math.random() * link.length)]
				axios.get(random.link)
					.then((resu) => {
						const $$ = cheerio.load(resu.data)
						const hasel = {}
						hasel.title = random.title
						hasel.source = random.link
						hasel.thumb = random.thumb
						hasel.tag = $$('div.site-main > div > header > div > div > p').text()
						hasel.upload = $$('div.site-main').find('span.auth-posted-on > time:nth-child(2)').text()
						hasel.author = $$('div.site-main').find('span.auth-name.mf-hide > a').text()
						hasel.comment = random.comment
						hasel.vote = random.vote
						hasel.view = $$('div.site-main').find('span.post-meta-item.post-views.s-post-views.size-lg > span.count').text()
						hasel.video1 = $$('div.site-main').find('video > source').attr('src')
						hasel.video2 = $$('div.site-main').find('video > a').attr('href')
						resolve(hasel)
					})
			})
	})
}
let letme = await gore()
let hiy = `[ *RANDOM GORE* ]

Title: ${letme.title}
Source: ${letme.source}
Tag: ${letme.tag}
Upload: ${letme.upload}
Author: ${letme.author}
Comment: ${letme.comment}
Vote: ${letme.vote}
Views: ${letme.view}
`
await Rifky.sendMessage(m.chat, { video: { url: letme.video1 }, caption: hiy }, { quoted: m })
}
break
        
        case 'tt3': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktok(url) {
	return new Promise(async (resolve, reject) => {
		const msc = await axios({
			url: "https://musicaldown.com/id",
			method: "GET",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
			}
		})
		const a = cheerio.load(msc.data)
		let FORM = {
			[`${a("#link_url").attr("name")}`]: url,
			[`${a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")}`]: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),
			verify: a("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
		}
		const getPost = await axios({
			url: "https://musicaldown.com/id/download",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(FORM))
		})

		const postmp3 = await axios({
			url: "https://musicaldown.com/id/mp3",
			method: "POST",
			headers: {
				'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
				"cookie": msc.headers["set-cookie"].join("")
			},
			data: new URLSearchParams(Object.entries(getPost))
		})

		const w = cheerio.load(getPost.data)
		const x = cheerio.load(postmp3.data)
		const FormatPost = {
			nowm: w("body > div.welcome.section > div").find("div.col.s12.l8 > a").eq(2).attr("href"),
			audio: x("a.btn.waves-effect.waves-light.orange").eq(2).attr("href")
		}
		return resolve(FormatPost)
	})
}
let tiktik = await tiktok(text)
await Rifky.sendMessage(m.chat, { video: { url: tiktik.nowm }, caption: mess.success }, { quoted: m })
await Rifky.sendMessage(m.chat, { audio: { url: tiktik.audio }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
        
        case 'aio2': {
  if (!text) return reply(`Example: ${prefix + command} link tt lu`)
async function aio(url){
	return new Promise(async(resolve,reject) => {
		
 const { data: rest } = await axios.get("https://steptodown.com/")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://steptodown.com/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "PHPSESSID=658754a80bacc095aced0be8e110f3b4; pll_language=en",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}
let sonice = await aio(text)
let wpol = `[ *AIO DOWNLOADER* ]

${sonice.title}

Durasi: ${sonice.duration}
Source: ${sonice.source}
Size: ${sonice.medias[0].formattedSize} || ${sonice.medias[0].size}
Quality: ${sonice.medias[0].quality}
MimeType: ${sonice.medias[0].extension}
`
await Rifky.sendMessage(m.chat, { video: { url: sonice.medias[0].url }, caption: wpol }, { quoted: m })
}
break
case 'quotess':{
//wm senn
async function quotes(input) {
	return new Promise((resolve, reject) => {
		fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => res.text())
			.then(res => {
				const $ = cheerio.load(res)
				data = []
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
					y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
					z = $(element).find('q[class="fbquote"]').text().trim()
//wm senn
					data.push({ author: x, bio: y, quote: z })
				})
				data.splice(2, 1)
//wm senn
				if (data.length == 0) return resolve({ creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb', status: false })
				resolve({ creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb', status: true, data })
			}).catch(reject)
	})
}
//wm senn
if (!text) return m.reply("Masukan Tipe Quotes\n\nContoh: .quotes senja")
//wm senn
let ayam = await quotes(text)
//wm senn
let jawir = ayam.data
let ngawi = pickRandom(jawir)
//wm senn
let cap = `  
_${ngawi.quote}_

~ ${ngawi.author}
`.trim()
//wm senn
m.reply(cap)
}
break
case 'quotesanime': {
async function quotesAnime() {
    try {
        const page = Math.floor(Math.random() * 184);
        const { data } = await axios.get('https://otakotaku.com/quote/feed/' + page);
        const $ = cheerio.load(data);
        const hasil = [];
        $('div.kotodama-list').each((l, h) => {
            hasil.push({
                link: $(h).find('a').attr('href'),
                gambar: $(h).find('img').attr('data-src'),
                karakter: $(h).find('div.char-name').text().trim(),
                anime: $(h).find('div.anime-title').text().trim(),
                episode: $(h).find('div.meta').text(),
                up_at: $(h).find('small.meta').text(),
                quotes: $(h).find('div.quote').text().trim()
            });
        });
        return hasil;
    } catch (error) {
        throw error;
    }
}
quotesAnime().then(hasil => {
 if (hasil.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `[ *QUOTESANIME* ]\n\n`;
 hasil.forEach((hasil) => {
 replyTextt += `Quotes: ${hasil.quotes}\nAnime: ${hasil.anime}\nEpisode: ${hasil.episode}\nUp: ${hasil.up_at}\nKarakter: ${hasil.karakter}\nLink${hasil.link}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat merandom di QuotesAnime.');
 m.reply(error.message);
 })
}
break
case 'tt2': {
  let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)
    
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
Judul: ${down.title}
Server: ${down.region}
ID: ${down.id}
Durasi: ${down.duration}
Size: ${down.size_nowm_hd}

Music Info:
ID: ${down.music_info.id}
Judul: ${down.music_info.title}
Pemilik Musik: ${down.music_info.author}

Stats: 
Views: ${down.stats.views}
Likes: ${down.stats.likes}
Comment: ${down.stats.comment}
Share: ${down.stats.share}
Download: ${down.stats.download}

Author: 
ID: ${down.author.id}
Full Name: ${down.author.fullname}
Nickname: ${down.author.nickname}
Avatar: ${down.author.avatar}
`
await Rifky.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await Rifky.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break

case 'cinema': {
async function cinema() {

  try {

    const response = await axios.get('https://21cineplex.com/')

    const html = response.data

    const $ = cheerio.load(html)

    const results = []

    $('.col-3 .movie').each((index, element) => {

      const movieTitle = $(element).find('.movie-desc h4').text().trim()

      const movieLabel = $(element).find('.movie-desc span.movie-label img').attr('src')

      const moviePoster = $(element).find('.movie-poster img').attr('src')

      const movieLink = $(element).find('a').attr('href')

      const data = {

        title: movieTitle,

        label: movieLabel,

        poster: moviePoster,

        link: movieLink

      }

      results.push(data)

    })

    return results

  } catch (error) {

    console.error(error)

  }

}
cinema().then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `[ *CINEMA RANDOM* ]\n\n`;
 results.forEach((results) => {
 replyTextt += `Judul: ${results.title}\nPoster: ${results.poster}\nLink: ${results.link}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat merandom di cinema.');
 m.reply(error.message);
 });
}
break
case 'cerpen': {
  if (!text) return reply(`Example: ${prefix + command} anak`)
async function cerpen(category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
let cepren = await cerpen(text)
let cepen = `Judul: ${cepren.title}\nAuthor: ${cepren.author}\nKategori: ${cepren.kategori}\nLolos: ${cepren.lolos}\nCerita: ${cepren.cerita}`
await m.reply(cepen)
}
break
case 'fdroid': {
  if (!q) return reply(`Example: ${prefix + command}`)
 async function avzxxx(query) {
    const url = `https://search.f-droid.org/?q=${encodeURIComponent(query)}&lang=id`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const apps = [];
        $('.package-header').each((index, element) => {
            const title = $(element).find('.package-name').text().trim();
            const apkUrl = $(element).attr('href');
            const LinkGambar = $(element).find('.package-icon').attr('src');

            apps.push({ title, apkUrl, LinkGambar });
        });

        return apps;

    } catch (error) {
        console.error('Error:', error);
    }
}
avzxxx(q).then(apps => {
 if (apps.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `Hasil pencarian untuk "${q}":\n\n`;
 apps.forEach((apps) => {
 replyTextt += `Judul: ${apps.title}\nApk Url: ${apps.apkUrl}\nLink Gambar: ${apps.LinkGambar}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat pencrian di fdroid.');
 m.reply(error.message);
 });
}
break
case 'style': case 'styletext': {
    async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
if (!text) return m.reply('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
 for (let i of anu) {
teks += `🍀 *${i.name}* : ${i.result}\n\n`
   }
m.reply(teks)
 }
break
case 'get': {
		if (typeof text !== 'string' || !text.trim()) {
			return m.reply(`Add Input (Link)\n\nExample: ${prefix + command} https://example.com`);
		}
		const isUrl = (url) => {
			return url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);
		};
		const urlMatch = isUrl(text);
		if (!urlMatch) {
			return m.reply(`Invalid URL provided. Please provide a valid URL.\n\nExample: ${prefix + command} https://example.com`);
		}
		const url = urlMatch[0]; // Use the first match
		try {
			const res = await axios.get(url);
			if (!/json|html|plain/.test(res.headers['content-type'])) {
				return m.reply(`The content type of the provided URL is not supported.\n\nSupported types: json, html, plain text.`);
			}
			m.reply(util.format(res.data));
		} catch (e) {
			m.reply(`Error fetching data from the provided URL: ${util.format(e.message)}`);
		}
}
break

case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await Rifky.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break
case 'filmsearch': {
    if (!text) return reply('Masukan query')

    m.reply(mess.wait)
    
    async function film(query) {
    return new Promise((resolve, reject) => {
      const https = require('https')
        const url = `https://ruangmoviez.my.id/?s=${query}`
        
        https.get(url, (resp) => {
            let data = ''
            
            resp.on('data', (chunk) => {
                data += chunk
            })
            
            resp.on('end', () => {
                let $ = cheerio.load(data)
                const movies = []

                $('article.item-infinite').each((index, element) => {
                    const movie = {}
                    movie.link = $(element).find('a[itemprop="url"]').attr('href')
                    movie.title = $(element).find('h2.entry-title a').text()
                    movie.relTag = $(element).find('a[rel="category tag"]').map((i, el) => $(el).text()).get()
                    movies.push(movie)
                })

                resolve({
                    status: 200,
                    creator: author,
                    result: movies
                })
            })
        }).on("error", (err) => {
            resolve({
                status: 404,
                msg: err.message
            })
        })
    })
}
    
    let { result } = await film(text)
    let cap = `\`Search Film From: ${text}\`\n\n`
    for (let res of result) {
        cap += `*Title*: ${res.title}\n`
        cap += `*Link*: ${res.link}\n`
        cap += `*Genre*: ${res.relTag.map(v => v).join(', ')}\n\n`
    }
    m.reply(cap)
}
break
case 'goredl': {
  if (!text) return reply(`Example: ${prefix + command} seegore`)
async function sgoredl(link) {
	return new Promise(async (resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $$ = cheerio.load(data)
				const format = {
					judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
					views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
					comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
					link: $$('video > source').attr('src')
				}
				const result = {
					creator: "Wudysoft",
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}
const gkanjut = await sgoredl(text)
let pant = gkanjut.data
let ghann = `[ *SEEGORE DOWNOADER* ]

Judul: ${pant.judul}
Views: ${pant.views}
Comment: ${pant.comment}
Link: ${pant.link}
`
Rifky.sendMessage(m.chat, {video: {url: pant.link}, caption: ghann}, {quoted: metaai})
}
break
case 'goresearch': {
  if (!text) return reply("Example: .goresearch girl")
async function ssearchgore(query) {
	return new Promise(async (resolve, reject) => {
		axios.get('https://seegore.com/?s=' + query).then(dataa => {
			const $$$ = cheerio.load(dataa)
			let pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text();
			let slink = 'https://seegore.com/?s=' + query
			axios.get(slink)
				.then(({
					data
				}) => {
					const $ = cheerio.load(data)
					const link = [];
					const judul = [];
					const uploader = [];
					const format = [];
					const thumb = [];
					$('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
						link.push($(b).attr('href'))
					})
					$('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
						let jud = $(d).text();
						judul.push(jud)
					})
					$('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
						let upl = $(f).text();
						uploader.push(upl)
					})
					$('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
						thumb.push($(h).attr('src'))
					})
					for (let i = 0; i < link.length; i++) {
						format.push({
							judul: judul[i],
							uploader: uploader[i],
							thumb: thumb[i],
							link: link[i]
						})
					}
					const result = {
						creator: "Wudysoft",
						data: format
					}
					resolve(result)
				})
				.catch(reject)
		})
	})
}
try {
let haiyak = await ssearchgore(text)
let coba = haiyak.data
let goreng;
for (let i of coba) {
   goreng = `Judul: ${i.judul}\nUploader: ${i.uploader}\nLink: ${i.link}\n\n`
}
m.reply(goreng)
} catch (e) {
m.reply(e)
}
}
break
case 'grupsearch': {
  if (!text) return m.reply('Masukkan query pencarian, misalnya: grupsearch india');
  const cheerio = require('cheerio');
  const axios = require('axios');
// wm avz
  async function skyZo(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const links = [];
// wm avz
      $('a.entry-image-link').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          links.push(href);
        }
      });
// wm avz
      return links;
    } catch (error) {
      console.error('Error fetching the page:', error);
      return [];
    }
  }
// wm avz
  async function avoskyJ(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const links = [];
      let counter = 1;
// wm avz
      $('a[href*="chat.whatsapp.com"]').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          links.push(`${counter}). ${href}`);
          counter++;
        }
      });
// wm avz
      return links.length > 0 ? links.join('\n') : 'Tidak ada link WhatsApp.';
    } catch (error) {
      console.error('Error fetching the page:', error);
      return 'Error.';
    }
  }
// wm avz
  const query = text.trim();
  const searchUrl = `https://whatsgrouplink.com/?s=${encodeURIComponent(query)}`;
// wm avz
  skyZo(searchUrl).then(async links => {
    if (links.length > 0) {
// wm avz
      const randomLink = links[Math.floor(Math.random() * links.length)];
// wm avz
      const result = await avoskyJ(randomLink);
// wm avz
      m.reply(`Link Source Yang Dipilih: ${randomLink}\n\nLink grup WhatsApp yang ditemukan:\n${result}`);
    } else {
      m.reply('Tidak ada link yang.');
    }
  }).catch(error => {
    console.error('Error:', error);
    m.reply('Terjadi kesalahan 404 Errrrr Rrorr');
  });
}
break
case 'jadwalsholat': { 
  if (!text) return reply(`Example: .jadwalsholat jakarta`)
async function jadwalSholat(query) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://umrotix.com/jadwal-sholat/${query}`)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        $(
          "body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ",
        ).each(function (a, b) {
          result = {
            tanggal: $(b).find("> div:nth-child(2)").text(),
            imsak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)",
              )
              .text(),
            subuh: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)",
              )
              .text(),
            dzuhur: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)",
              )
              .text(),
            ashar: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)",
              )
              .text(),
            maghrib: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)",
              )
              .text(),
            isyak: $(b)
              .find(
                "> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)",
              )
              .text(),
          };
          resolve(result);
        });
      })
      .catch(reject);
  });
}
let sholatt = await jadwalSholat(text)
m.reply(`
[ *JADWAL SHOLAT* ]

5 Waktu dari Daerah ${text}

Tanggal: ${sholatt.tanggal}
Imsak: ${sholatt.imsak}
Shubuh: ${sholatt.subuh}
Dzuhur: ${sholatt.dzuhur}
Ashar: ${sholatt.ashar}
Maghrib: ${sholatt.maghrib}
Isya: ${sholatt.isyak}
`)
}
break
case 'kurumi': {
//wm hann
  if (!text) return m.reply(`Hai, apa yang kamu hari ini?`)
async function generateVoice(Query) {
    const formData = new FormData();
    formData.append("locale", 'id-ID');
    formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
    formData.append("ip", '46.161.194.33');
    const response = await fetch('https://app.micmonster.com/restapi/create', {
        method: 'POST',
        body: formData
    });
    return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
//wm hann
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    //wm hann
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };
//wm hann
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
//wm hann
const prompt = `Nama kamu adalah Kurumi, kamu adalah assisten virtual yang dikembangkan langsung dari google.`;
    const combinedPrompt = `${prompt} ${text}`;
//wm hann
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);
//wm hann
        if (response) {
//wm hann
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            //wm hann
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
        } else {
//wm hann
            Rifky.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
//wm hann
        Rifky.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
//wm hann
    try {
//wm hann
        let res = await generateVoice(messagee)
await m.reply(messagee)
        if (res) await Rifky.sendMessage(m.chat, {
        audio: res,
        mimetype: 'audio/mp4',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
    } catch (e) {
        await m.reply(e)
    }
//wm hann
}
break
case 'tr': {
  if (!m.quoted.text) return reply(`reply yang mau ditranslate`)
async function translate(query = "", lang) {
	if (!query.trim()) return "";
	const url = new URL("https://translate.googleapis.com/translate_a/single");
	url.searchParams.append("client", "gtx");
	url.searchParams.append("sl", "auto");
	url.searchParams.append("dt", "t");
	url.searchParams.append("tl", lang);
	url.searchParams.append("q", query);

	try {
		const response = await fetch(url.href);
		const data = await response.json();
		if (data) {
			return [data[0].map((item) => item[0].trim()).join("\n"), data[2]];
		} else {
			return "";
		}
	} catch (err) {
		throw err;
	}
}

let banjir = await translate(m.quoted.text, "id")
m.reply(`${banjir[0]}, ${banjir[1]}`)
}
break
case 'kurumi-chat': {
if (!text) return reply("Hai, ada yang mau kamu diskusikan hari ini")
async function v_girl(text,prompt, name) {
try {
const response = await axios.post('https://boredhumans.com/virtual_girlfriends/virtual_girlfriends_api.php',
      `prompt=${text.replace(/\s+/g, "%2520")}&chat_id=lwle4nyomx5t0w6quo8&init_prompt=${prompt.replace(/\s+/g, "%2520")}&voice_id=XrExE9yKIg1WjnnlVkGX&stability=0.5&similarity_boost=0.75&name=${name.replace(/\s+/g, "%2520")}&useAudio=false&dateLoc=Bookstore`,
      {
        headers: {
          'User-Agent': 'Googlebot-News',
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      });
    return response.data
    } catch (e) {
    return e
    }
    }

let prompt = 'kurumi is a beginner WhatsApp bot maker ', name = 'kurumi'
        let {
            output
        } = await v_girl(text, prompt, name);
        await m.reply(output[0]);
}
break
case 'txt2img': {
if (!text) return m.reply(`Example: ${prefix + command} cat`)
async function photoleap(prompt) {
    try {
        let result = []
        for (let i = 0; i < 3; i++) {
            let {
                data
            } = await axios.get('https://tti.photoleapapp.com/api/v1/generate?prompt=' + prompt);
            result.push(data.result_url)
        }
        return result
    } catch (e) {
        return ({
            msg: 404
        })
    }
}

let tahu = await photoleap(text)
for (const x of tahu) {
Rifky.sendMessage(m.chat, {image: {url: x}, caption: `Done`}, {quoted: m})
}
}
break
case 'gpt4': {
  if (!text) return m.reply(`Hai, apa yang ingin saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 80000000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Furina, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
m.reply(kanjuthann)
}
break
        case "tts": {
          if (!text) return m.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          Rifky.sendMessage(m.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          })
        }
        break
      
case 'tiktoksearch':
case 'ttsearch': {
    const dann = require('d-scrape')
if (!text) return reply(`Contoh : ${prefix + command} jj epep`)
reply('Sedang Diproses ⏳')
try {
let anu = await dann.search.tiktoks(text)
Rifky.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
reply('Error :v')
}
}
break
        
case 'surah': {
  if (!q) return reply(`Example ${prefix+command} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTexttt = `Hasil dari Surah untuk "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 m.reply(replyTexttt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat memasuki angka di surah.');
 console.error(error);
 });
}
break
case 'sendfitur': {
if (!isCreator) return reply(mess.OnlyOwner);
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!text) return m.reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return m.reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Rifky.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return m.reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Rifky.sendMessage(recipient, { text: message }, { quoted: m });
m.reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
m.reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
}
break;

case 'igdl': {
  if (!text) return reply("Example: .igdl ig reels\n\nonly reels")
async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        media: mediaURL
      }
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}
let kanjutgedeu = await igdl(text)
Rifky.sendMessage(m.chat, {video: {url: kanjutgedeu.media}, caption: mess.success}, {quoted: m})
}
break

case 'kisahnabi': {
if (!text) return reply("nama nabinya?")
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return reply("*Not Found*\n*Coba Jangan Gunakan Huruf Kapital*")
     
     let hasil = `_*Nama Nabi :*_ ${kisah.name} 
_*Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*Tempat Lahir :*_ ${kisah.tmp}
_*Usia :*_ ${kisah.usia}

* — [ K I S A H ] — *

${kisah.description}`

     reply(hasil)
}
break

 case 'prodia': {
if (!q) return m.reply(`quwry?`)
    async function prodia(query) {
        const headers = { // wm avz
            'user-agent': 'Mozilla/5.0 (Linux; Android 11; Avosky) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Mobile Safari/537.36'
        };
        try {            // wm avz
            const AvoskyX = await axios.get('https://api.prodia.com/generate', {
                params: {
                    "new": "true",
                    "prompt": query,
                    "model": "dreamshaper_6BakedVae.safetensors [114c8abb]",
                    "steps": "50",
                    "cfg": "9.5",
                    "seed": Math.floor(Math.random() * 10000) + 1,
                    "sampler": "Euler",
                    "aspect_ratio": "square"
                }, // wm avz
                headers,
                timeout: 30000
            });
            const avos = AvoskyX.data;
            let AvoskyNih;
            do {
                const syra = await axios.get(`https://api.prodia.com/job/${avos.job}`, { headers });
                AvoskyNih = syra.data;
            } while (AvoskyNih.status !== 'succeeded');
            const imageUrl = `https://images.prodia.xyz/${avos.job}.png?download=1`;
            Rifky.sendMessage(m.chat, { image: { url: imageUrl }, caption: '_donee ketua_.' });
        } catch (error) {
            m.reply('Gagal');
        }
    }    
    prodia(`${q}`);
}
// wm avz
break

case 'npmstalk': {
  if (!text) return reply("Example: .npmstalk axios")
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}
try {
let jut = await npmstalk(text)
let ahwoi = `[ *NPM STALK* ]

Name: ${jut.name}
Version Latest: ${jut.versionLatest}
Version Publish: ${jut.versionPublish}
Version Update: ${jut.versionUpdate}
Latest Dependencies: ${jut.latestDependencies}
Publish Dependencies: ${jut.publishDependencies}
Publish Time: ${jut.publishTime}
Latest Publish Time: ${jut.latestPublishTime}
`
Rifky.sendMessage(m.chat, {text: ahwoi}, {quoted: m})
} catch (error) {
  m.reply(error.message)
}
}
break
case 'editee': {
    if (!q) return m.reply(`_Tanya Ap?`);
// wm avz
    async function getSession() {
        const res = await axios.get("https://editee.com/chat-gpt");
        return res.headers['set-cookie'] ? res.headers['set-cookie'][0].split(';')[0].split('=')[1] : null;
    }
// wm avz
    async function avz(query) {
        const sessionCookie = await getSession();
        const headers = {
            "content-type": "application/json",
            "cookie": `editeecom_session=${sessionCookie}`,
            "user-agent": "Mozilla/5.0",
            "x-requested-with": "XMLHttpRequest"
        };
// wm avz
        const response = await axios.post("https://editee.com/submit/chatgptfree", {
            context: " ",
            selected_model: "gemini",
            important: `aV77OsKy`, // ubah aja kalau mau error wkwk
            user_input: query
        }, { headers });
// wm avz
        return response.data;
    }
// wm avz
    try {
        const answer = await avz(q);
        m.reply(answer.text);
    } catch (error) {
        console.error("Error :", error);
        m.reply("Terjadi ?.");
    }
}
break
        
        case 'ttslide': {
    let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)

    if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    
    async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

try {
    const {
        result } = await tiktok(text);
    m.reply(mess.wait)
    let no = 1
    for (let i of result) {
        Rifky.sendMessage(m.sender, {image: {url: i}, caption: `Gambar ke - ${no++}`}, {quoted: m})
}
} catch (error) {
 m.reply(error)
}
}
break
        
        case 'steamsearch': {
  if (!q) return reply("Example: .steamsearch honkai impact")
async function Steam(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, status } = await axios.get('https://store.steampowered.com/search/?term=' + search)
      const $ = cheerio.load(data)
      const hasil = []
      $('#search_resultsRows > a').each((a, b) => {
        const link = $(b).attr('href')
        const judul = $(b).find(`div.responsive_search_name_combined > div.col.search_name.ellipsis > span`).text()
        const harga = $(b).find(`div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.responsive_secondrow `).text().replace(/ /g, '').replace(/\n/g, '')
        var rating = $(b).find(`div.responsive_search_name_combined > div.col.search_reviewscore.responsive_secondrow > span`).attr('data-tooltip-html')
        const img = $(b).find(`div.col.search_capsule > img`).attr('src')
        const rilis = $(b).find(`div.responsive_search_name_combined > div.col.search_released.responsive_secondrow`).text()

        if (typeof rating === 'undefined') {
          var rating = 'no ratings'
        }
        if (rating.split('<br>')) {
          let hhh = rating.split('<br>')
          var rating = `${hhh[0]} ${hhh[1]}`
        }
        hasil.push({
          judul: judul,
          img: img,
          link: link,
          rilis: rilis,
          harga: harga ? harga : 'no price',
          rating: rating
        })
      })
      if (hasil.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(hasil)
    } catch (err) {
      console.error(err)
    }
  })
}
Steam(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((hasil, index) => {
 replyTextt += `${index + 1}. ${hasil.judul}\nHarga: ${hasil.harga}\nLink: ${hasil.link}\nRilis: ${hasil.rilis}\nRating: ${hasil.rating}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari game di steam.');
 console.error(error);
 });
}
break
        
        case 'top4top': {
  const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = "                "
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) reply("Reply Gambar Aja")
  let media = await q.download()
  let link = await top4top(media)
  let { result, status } = link
  let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}
📊 *S I Z E :* ${media.length} Byte
`

reply(caption)
}
break
        
        case 'chord': {
async function chord(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const head = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
 "Cookie": "__gads=ID=4513c7600f23e1b2-22b06ccbebcc00d1:T=1635371139:RT=1635371139:S=ALNI_MYShBeii6AFkeysWDKiD3RyJ1106Q; _ga=GA1.2.409783375.1635371138; _gid=GA1.2.1157186793.1635371140; _fbp=fb.1.1635371147163.1785445876"};
 
 const { data } = await axios.get(`http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search=${query}`, { headers: head });
 
 const anu = await axios.get(`http://app.chordindonesia.com/?json=get_post&id=${data.posts[0].id}`, { headers: head });
 
 let $ = cheerio.load(anu.data.post.content);
 
 resolve({
 title: $("img").attr("alt"),
 chord: $("pre").text().trim()
 });
 } catch (error) {
 reject(error);
 }
 });
}

if (!text) return m.reply('Input Judul Lagu');
 
let query = text.replace(/\s/g, '+'); // Mengganti spasi dengan "+"
let a = await chord(query);
 
m.reply(`*Song :* ${a.title}\n*Chord :*\n\n${a.chord}`);
};
break
case 'quran': {
const quran = JSON.parse(fs.readFileSync('./json/quran.json'))
var tobatlah = pickRandom(quran)
let bismillah = `[ *QURAN* ]

Nomor Surah: ${tobatlah.nomor}
Surah: ${tobatlah.nama}
Asma: ${tobatlah.asma}
Arti: ${tobatlah.arti}
Tipe: ${tobatlah.type}
Nomor Urut: ${tobatlah.urut}
Keterangan: ${tobatlah.keterangan}

${global.namabot}
`
reply(bismillah)
}
break
case 'quotes': {
const quo = JSON.parse(fs.readFileSync('./json/quotes.json'))
var teu = pickRandom(quo)
let beir = `[ *QUOTES* ]

Quote: ${teu.quote}
Author: ${teu.author}
Catogory: ${teu.category}

${global.namabot}
`
reply(beir)
}
break
case 'penerbit': {
const quoo = JSON.parse(fs.readFileSync('./json/penerbit.json'))
var teup = pickRandom(quoo)
let mnk = `[ *PENERBIT* ]

Penerbit: ${teup.penerbit}
No Anggota: ${teup.no_anggota}
Wilayah: ${teup.wilayah}
Tahun: ${teup.tahun_masuk}
Anggota Luar Biasa: ${teup.anggota_luar_biasa}

${global.namabot}
`
reply(mnk)
}
break
case 'pahlawannasional': {
const quoo = JSON.parse(fs.readFileSync('./json/penerbit.json'))
var teup = pickRandom(quoo)
let mnk = `[ *PENERBIT* ]

Penerbit: ${teup.penerbit}
No Anggota: ${teup.no_anggota}
Wilayah: ${teup.wilayah}
Tahun: ${teup.tahun_masuk}
Anggota Luar Biasa: ${teup.anggota_luar_biasa}

${global.namabot}
`
reply(mnk)
}
break
case 'gunungmeletus': {
const quooo = JSON.parse(fs.readFileSync('./json/gunungmeletus.json'))
var teupp = pickRandom(quooo)
let mnka = `[ *GUNUNG MELETUS* ]

Nama: ${teupp.nama}
Bentuk: ${teupp.bentuk}
Tinggi Meter: ${teupp.tinggi_meter}
Tahun: ${teupp.estimasi_letusan_terakhir}
Lokasi: ${teupp.geolokasi}

${global.namabot}
`
reply(mnka)
}
break
case 'tomoe': {
    if (!text) {
        return m.reply(`Contoh: .tomoe hai manis`);
    }

const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

    m.reply("tomoe sedang berfikir...");
    const prompt = `Nama kamu adalah tomoe, kamu adalah assisten virtual yang dikembangkan langsung dari google.`;
    const combinedPrompt = `${prompt} ${text}`;
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);

        if (response) {
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            message = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');

            // Mengirim respons dari Gemini ke user
            await Rifky.sendMessage(m.chat, { text: message }, { quoted: m });
        } else {
            await Rifky.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
        await Rifky.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
}
break
case 'waifu': {
const waifud = await fetchJson 
(`https://pic.re/image.json`)
const waifut = "https://" + waifud.file_url
  Rifky.sendMessage(from, { image: { url: waifut }, caption: `Hell nah\n\nSize: ${waifud.file_size}` }, { quoted: m })
}
break
case 'elonmu-news': {
const arsipp = await fetchJson 
(`https://elonmu.sh/api`)
  let bluee = `[ *ELONMU-NEWS* ]
  
  Source: ${arsipp.source}
  Title: ${arsipp.title}
  Deskripsi: ${arsipp.description}
  Link: ${arsipp.link}
  Rilis Berita: ${arsipp.publishDate}
  `
  Rifky.sendMessage(from, {image: {url: arsipp.urlImage}, caption: bluee}, {quoted: m})
}
break
case 'tebakumur': {
          if (!text) return m.reply("Example .tebakumur haidar")
const mmeeg = await fetchJson 
(`https://api.agify.io/?name=${text}`)
  let qour = `[ *TEBAK UMUR* ]
  
  Count: ${mmeeg.count}
  Nama: ${mmeeg.name}
  Umur: ${mmeeg.age}
  `
  await Rifky.sendMessage(from, {text: qour}, {quoted: m})
}
break
case 'freetogame': {
const kocakk = await fetchJson 
(`https://www.freetogame.com/api/games?platform=pc`)
let brak = pickRandom(kocakk)
  let gamefree = `[ *FREE TO GAME* ]
  
  Judul: ${brak.title}
  Deskripsi: ${brak.short_description}
  Link: ${brak.game_url}
  Genre: ${brak.genre}
  Platform: ${brak.platform}
  Publisher: ${brak.publisher}
  Developer: ${brak.developer}
  Rilis: ${brak.release_date}
  `
  await Rifky.sendMessage(from, {image: {url: brak.thumbnail}, caption: gamefree}, {quoted: m})
}
break
case 'yesorno': {
          if (!text) return reply("Example .yesorno aku ganteng ga")
const haij = await fetchJson 
(`https://yesno.wtf/api`)
  let prik = `[ *YES OR NO* ]
  
  Pertanyaan: ${text}
  Jawaban: ${haij.answer}
  `
  let buttonMessage = {
                 video: {url: haij.image},
                 gifPlayback:true,
                    caption: prik,
                }
            Rifky.sendMessage(m.chat, buttonMessage,{ quoted:m })
}
break
case 'doaharian': {
var pripayerr = [
  {
    "id": "1",
    "doa": "Doa sebelum tidur",
    "ayat": "بِسْمِكَ االلّٰهُمَّ اَحْيَا وَبِاسْمِكَ اَمُوْتُ",
    "latin": "Bismikallaahumma ahyaa wa ammuut",
    "artinya": "Dengan menyebut nama Allah, aku hidup dan aku mati"
  },
  {
    "id": "2",
    "doa": "Doa bangun tidur",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ",
    "latin": "Alhamdu lillahil ladzii ahyaanaa ba’da maa amaa tanaa wa ilahin nusyuuru",
    "artinya": "Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan"
  },
  {
    "id": "3",
    "doa": "Doa masuk kamar mandi",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",
    "latin": "Allahumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
    "artinya": "Ya Allah, aku berlindung pada-Mu dari godaan setan laki-laki dan setan perempuan"
  },
  {
    "id": "4",
    "doa": "Doa ketika bercermin",
    "ayat": "اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ فَحَسِّـنْ خُلُقِىْ",
    "latin": "Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",
    "artinya": "Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku"
  },
  {
    "id": "5",
    "doa": "Doa keluar rumah",
    "ayat": "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",
    "latin": "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
    "artinya": "Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertolongan Allah."
  },
  {
    "id": "6",
    "doa": "Doa masuk rumah",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",
    "latin": "Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal"
  },
  {
    "id": "7",
    "doa": "Doa memohon ilmu yang bermanfaat",
    "ayat": "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
    "latin": "Allahumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)"
  },
  {
    "id": "8",
    "doa": "Doa sebelum belajar",
    "ayat": "يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",
    "latin": "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
    "artinya": "Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman"
  },
  {
    "id": "9",
    "doa": "Doa sesudah belajar",
    "ayat": "اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",
    "artinya": "Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam."
  },
  {
    "id": "10",
    "doa": "Doa sebelum wudhu",
    "ayat": "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
    "latin": "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
    "artinya": "Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala"
  },
  {
    "id": "11",
    "doa": "Doa setelah wudhu",
    "ayat": "اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
    "latin": "Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina.",
    "artinya": "Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh"
  },
  {
    "id": "12",
    "doa": "Doa sebelum membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ",
    "latin": "Allahummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",
    "artinya": "Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan"
  },
  {
    "id": "13",
    "doa": "Doa setelah membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",
    "artinya": "Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam."
  },
  {
    "id": "14",
    "doa": "Doa sebelum mandi",
    "ayat": "اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ",
    "latin": "Allahummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",
    "artinya": "Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku"
  },
  {
    "id": "15",
    "doa": "Doa hendak berpergian",
    "ayat": "اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ",
    "latin": "Allahumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",
    "artinya": "Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga."
  },
  {
    "id": "16",
    "doa": "Doa ketika sampai di tempat tujuan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ",
    "latin": "Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi",
    "artinya": "Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku."
  },
  {
    "id": "17",
    "doa": "Doa memakai pakaian",
    "ayat": "بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ",
    "latin": "Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",
    "artinya": "Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya"
  },
  {
    "id": "18",
    "doa": "Doa memakai pakaian baru",
    "ayat": " اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ",
    "latin": "Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",
    "artinya": "Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku"
  },
  {
    "id": "19",
    "doa": "Doa melepas pakaian",
    "ayat": "بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ",
    "latin": "Bismillaahil ladzii laa ilaaha illaa huwa",
    "artinya": "Dengan nama Allah yang tiada Tuhan selain-Nya"
  },
  {
    "id": "20",
    "doa": "Doa menjelang sholat subuh",
    "ayat": "اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ",
    "latin": "Allaahumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",
    "artinya": "Ya Allah! Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)"
  },
  {
    "id": "21",
    "doa": "Doa menyambut pagi hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",
    "latin": "Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "22",
    "doa": "Doa menyambut sore hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ",
    "latin": "Allahumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "23",
    "doa": "Doa bercermin",
    "ayat": "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    "latin": "Alloohumma kamaa hassanta kholqii fahassin khuluqi",
    "artinya": "Ya Allah, sebagaimana Engkau baguskan tubuhku, maka baguskanlah akhlaqku"
  },
  {
    "id": "24",
    "doa": "Doa pergi ke masjid",
    "ayat": "اللَّهُمَّ اجْعَلْ فِى قَلْبِى نُورًا . وَفِى بَصَرِى نُورًا . وَفِى سَمْعِى نُورًا . وَعَنْ يَمِينِى نُورًا . وَعَنْ يَسَارِى نُورًا . وَفَوْقِى نُورًا . وَتَحْتِى نُورًا . وَأَمَامِى نُورًا . وَخَلْفِى نُورًا . وَاجْعَلْ لِى نُورًا",
    "latin": "Alloohummaj’al fii qolbi nuuron. Wa fii bashori nuuron. Wa fii sam’i nuuron. Wa ‘an yamiinii nuuron. Wa ‘ay yasaarii nuuron. Wa fauqi nuuron. Wa tahti nuuron. Wa amaamii nuuron. Wakholqi nuuron. Waj’al lii nuuron",
    "artinya": "Ya Allah, jadikanlah di dalam hatiku cahaya. Dalam penglihatanku cahaya. Pada pendengaranku cahaya. Sebelah kananku cahaya. Sebelah kiriku cahaya. Atasku cahaya. Bawahku cahaya. Depanku cahaya. Belakangku cahaya. Dan berikanlah cahaya kepadaku."
  },
  {
    "id": "25",
    "doa": "Doa masuk masjid",
    "ayat": "اللَّهُمَّ افْتَحْ لِى أَبْوَابَ رَحْمَتِكَ",
    "latin": "Alloohummaf tahlii abwaaba rohmatik",
    "artinya": "Ya Allah, bukakanlah pintu-pintu rahmatMu untukku"
  },
  {
    "id": "26",
    "doa": "Doa keluar masjid",
    "ayat": "اللَّهُمَّ إِنِّى أَسْأَلُكَ مِنْ فَضْلِكَ",
    "latin": "Alloohumma innii as-aluka min fadllik",
    "artinya": "Ya Allah, sesungguhnya aku memohon keutamaan kepadaMu"
  },
  {
    "id": "27",
    "doa": "Doa setelah adzan",
    "ayat": "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِى وَعَدْتَهُ",
    "latin": "Alloohumma robba haadzihid da’watit taammah washsholaatil qoo-imah. Aati Muhammadanil wasiilata wal fadliilah. Wab’atshu maqooman mahmuudanil ladzii wa ‘adtah",
    "artinya": "Ya Allah, Tuhan panggilan yang sempurna dan shalat yang akan didirikan ini. Berikanlah wasilah dan keutamaan kepada Muhammad. Bangkitkanlah dia pada kedudukan yang terpuji seperti yang Engkau janjikan kepadanya."
  },
  {
    "id": "28",
    "doa": "Doa naik kendaraan",
    "ayat": "سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    "latin": "Subhaanal ladzii sakhkhoro lanaa haadzaa wamaa kunnaa lahuu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun",
    "artinya": "Mahasuci Dia yang telah menundukkan semua ini bagi kami padahal sebelumnya kami tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami."
  },
  {
    "id": "29",
    "doa": "Doa masuk pasar",
    "ayat": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكُ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِى وَيُمِيتُ وَهُوَ حَىٌّ لاَ يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ",
    "latin": "Laa ilaaha illalloohu wahdahu laa syariikalah. Lahul mulku walahul hamdu. Yuhyii wa yumiitu wahuwa hayyun laa yamuut. Biyadihil khoir wahuwa ‘alaa kulli syai-in qodiir",
    "artinya": "Tiada tuhan selain Allah Yang Maha Esa, tiada sekutu bagiNya. Dia yang mempunyai kerajaan dan segala pujian. Dialah yang menghidupkan dan mematikan, dan Dia Mahahidup yang tidak mati. Di tangan-Nya segala kebaikan dan Dia Mahakuasa atas segala sesuatu."
  },
  {
    "id": "30",
    "doa": "Doa sebelum makan",
    "ayat": "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    "latin": "Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannaar.",
    "artinya": "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka"
  },
  {
    "id": "31",
    "doa": "Doa sesudah makan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
    "latin": "Alhamdulillahilladzi ath-amanaa wa saqoonaa wa ja'alanaa minal muslimiin.",
    "artinya": "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk dari kaum muslimin."
  },
  {
    "id": "32",
    "doa": "Doa ketika turun hujan",
    "ayat": "اللَّهُمَّ صَيِّبًا نَافِعًا",
    "latin": "Allahumma shayyiban nafi’an.",
    "artinya": "Ya Allah, curahkanlah air hujan yang bermanfaat. (HR Bukhar dari Aisyah RA)"
  },
  {
    "id": "33",
    "doa": "Doa ketika takut bahaya hujan lebat",
    "ayat": "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا ، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ ، وَبُطُونِ الأَوْدِيَةِ ، وَمَنَابِتِ الشَّجَرِ",
    "latin": "Allahumma hawalaina wala ‘alaina. Allahumma ‘alal akami wa adhirabi, wa buthunil auwdiyati, wamanabitisyajari.",
    "artinya": "Ya Allah turunkan hujan ini di sekitar kami jangan di atas kami. Ya Allah curahkanlah hujan ini di atas bukit-bukit, di hutan-hutan lebat, di gunung-gunung kecil, di lembah-lembah, dan tempat-tempat tumbuhnya pepohonan. (HR Bukhari Muslim)"
  },
  {
    "id": "34",
    "doa": "Doa setelah turun hujan",
    "ayat": "مُطِرْنَا بِفَضْلِ اللـهِ ورَحْمَتِهِ",
    "latin": "Muthirnaa bifadhlillahi wa rahmatihi.",
    "artinya": "Diturunkan kepada kami hujan berkat anugerah Allah dan rahmat-Nya. (HR Bukhari)"
  },
  {
    "id": "35",
    "doa": "Doa bertemu binatang buas",
    "ayat": "إِنَّهُۥ مِن سُلَيْمَٰنَ وَإِنَّهُۥ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    "latin": "Innahụ min sulaimāna wa innahụ bismillāhir-raḥmānir-raḥīm",
    "artinya": "Sesungguhnya surat itu, dari SuIaiman dan sesungguhnya (isi)nya: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (Qs. An Naml: 30 )"
  },
  {
    "id": "36",
    "doa": "Doa agar selalu dicukupkan rezeki",
    "ayat": "اَللّٰهُمَّ اَكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    "latin": "Allahummakfini bihalalika ‘an haramik wa aghnini bifadhlika amman siwak",
    "artinya": "Ya Allah, berilah aku kecukupan dengan rezeki yang halal, sehingga aku tidak memerlukan yang haram, dan berilah aku kekayaan dengan karuniamu, sehingga aku tidak memerlukan bantuan orang lain, selain diri-mu. (HR. Ahmad)"
  },
  {
    "id": "37",
    "doa": "Doa ketika menyisir rambut",
    "ayat": "اَللّهُمَّ حَرِّمْ شَعْرِى وَبَشَرِى عَلىَ النَّار",
    "latin": "ALLAHUMMA HARRIM SYA'RII WA BASYARII 'ALAN NAAR",
    "artinya": "Ya Allah, halangilah rambut dan kulitku dari api neraka"
  }
]
var tobat = pickRandom(pripayerr)
let deks = ` [ *DOA HARIAN* ]

- ${tobat.doa}

Ayat: ${tobat.ayat}
Latin: ${tobat.latin}
Artinya: ${tobat.artinya}
`
m.reply(deks)
}
break
case 'putar': {
    if (!text || !text.includes('|')) {
        return m.reply(`Silakan masukkan beberapa opsi dipisahkan oleh "|" (contoh: ${prefix + command} ayam|nasi|pisang|apel)`)
    }
const { createCanvas } = require('canvas')
let previousResult = null
    const items = text.split('|').map(item => item.trim())

    if (items.length < 2) {
        return m.reply('Masukkan setidaknya dua pilihan untuk diputar!')
    }

    let randomIndex, selectedItem
    do {
        randomIndex = Math.floor(Math.random() * items.length)
        selectedItem = items[randomIndex]
    } while (selectedItem === previousResult)

    previousResult = selectedItem

    const canvas = createCanvas(400, 400)
    const ctx = canvas.getContext('2d')

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = 150
    const innerRadius = 30
    const angleStep = (2 * Math.PI) / items.length

    items.forEach((item, index) => {
        const startAngle = index * angleStep
        const endAngle = startAngle + angleStep

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle)
        ctx.fillStyle = colors[index % colors.length]
        ctx.fill()
        ctx.stroke()

        const textAngle = startAngle + angleStep / 2
        const textX = centerX + outerRadius / 1.5 * Math.cos(textAngle)
        const textY = centerY + outerRadius / 1.5 * Math.sin(textAngle)
        ctx.fillStyle = 'black'
        ctx.font = '20px Arial'
        ctx.fillText(item, textX - ctx.measureText(item).width / 2, textY)
    })

    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()

    const arrowLength = 50
    const arrowWidth = 10
    const selectedAngle = randomIndex * angleStep + angleStep / 2

    const arrowTipX = centerX + (outerRadius + 10) * Math.cos(selectedAngle)
    const arrowTipY = centerY + (outerRadius + 10) * Math.sin(selectedAngle)
    const arrowBase1X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle - Math.PI / 12)
    const arrowBase1Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle - Math.PI / 12)
    const arrowBase2X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle + Math.PI / 12)
    const arrowBase2Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle + Math.PI / 12)

    ctx.beginPath()
    ctx.moveTo(arrowTipX, arrowTipY)
    ctx.lineTo(arrowBase1X, arrowBase1Y)
    ctx.lineTo(arrowBase2X, arrowBase2Y)
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = 'black'
    ctx.font = '15px Arial'
    ctx.fillText('@pontadev', 10, canvas.height - 10)

    const buffer = canvas.toBuffer()

    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `_Nih Kak Hasil Putaran: *${selectedItem}*_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Spin Lagi untuk mencoba lagi'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: buffer }, { upload: Rifky.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Spin Lagi\",\"id\":\".putar ${text}\"}`
                        }],
                    })
                })
            }
        }
    }, { quoted: m })

    return await Rifky.relayMessage(m.chat, msgs.message, {})
}
break
case 'sfile': {
	if (args[0] && args[0].match(/(https:\/\/sfile.mobi\/)/gi)) {
	  const sfile = {
	search: async (query, page = 1) => {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text()), arr = []
		$('div.list').each((idx, el) => {
			let title = $(el).find('a').text(),
				size = $(el).text().trim().split(' (')[1],
				link = $(el).find('a').attr('href')
			if (link) arr.push({ title, size: size.replace(')', ''), link })
		})
		return arr
	},
	download: async url => {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text()), obj = {}
		obj.filename = $('div.w3-row-padding').find('img').attr('alt')
		obj.mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		obj.filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		obj.download = await getLink(url)
		return obj
	}
}

async function getLink(url) {
	url = 'https://sfile.mobi/download' + (new URL(url)).pathname
	let html = await (await fetch(url)).text()
	return html.split('" rel="nofollow"')[0].split('start, <a href="')[1]
}
		let res = await sfile.download(args[0])
		if (!res) throw 'Error'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		await Rifky.sendMessage(
			m.chat,
			{
				document: { url: res.download },
				fileName: res.filename,
				mimetype: res.mimetype,
			},
			{ quoted: m },
		);
	} else if (args[0]) {
		let query = args.join` `.split`|`[0], page = parseInt(args.join` `.split`|`[1]) || 1,
			res = await sfile.search(query, page)
		if (!res.length) return reply(`Query "${query}" not found`)
		res = res.map(v => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		await reply(res + `\nPage: ${page}`)
	} else return m.reply(`Masukan Query Atau Link!\n\nContoh:\n${prefix + command} growtopia\n${prefix + command} https://sfile.mobi/1BnLYfsHEcO7`)
}
break

case 'songai':
case 'songgen': {
    if (!text) {
        return reply(`Masukkan teks\nContoh: ${prefix + command} aku cinta tobrut`);
    }
    const api = {
    xterm: {
        url: "https://ai.xterm.codes",
        key: "Bell409"
    }
}; 
    const SongGenerator = async (prompt) => {
        try {
            const { key } = await Rifky.sendMessage(m.chat, { text: "Please wait.." }, { quoted: m });
            const response = await axios({
                method: 'post',
                url: `${api.xterm.url}/api/audioProcessing/song-generator`,
                params: { prompt, key: api.xterm.key },
                responseType: 'stream'
            });
            return new Promise((resolve, reject) => {
                response.data.on('data', (chunk) => {
                    try {
                        const eventString = chunk.toString();
                        const eventData = eventString.match(/data: (.+)/);
                        if (eventData && eventData[1]) {
                            const data = JSON.parse(eventData[1]);
                            switch (data.status) {
                                case 'queueing':
                                case 'generating':
                                    Rifky.sendMessage(m.chat, { text: data.msg, edit: key });
                                    break;
                                case 'failed':
                                    response.data.destroy();
                                    reject(new Error(data.msg));
                                    break;
                                case 'success':
                                    response.data.destroy();
                                    resolve(data);
                                    break;
                                default:
                                    Rifky.sendMessage(m.chat, { text: "Unknown status: " + data, edit: key });
                            }
                        }
                    } catch (e) {
                        Rifky.sendMessage(m.chat, { text: "Error processing chunk: " + e.message, edit: key });
                        response.data.destroy();
                        reject(e);
                    }
                });
                response.data.on('error', (err) => {
                    Rifky.sendMessage(m.chat, { text: "Stream error: " + err.message, edit: key });
                    reject(err);
                });
            });
        } catch (error) {
            Rifky.sendMessage(m.chat, { text: "Error: " + error.message, edit: key });
            throw error;
        }
    };
    try {
        const data = await SongGenerator(text);
        await Rifky.sendPresenceUpdate('recording', m.chat);
        await Rifky.sendMessage(m.chat, { audio: { url: data.result.audioUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
        let doc = {
            text: data.result.lyrics,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/6281334595342/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${ucapanWaktu} ${m.pushName}`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "Ikuti saluran Gatau di WhatsApp: https://whatsapp.com/channel/0029VaryYTD6buMS0WFKe70y",
                    thumbnail: fkethmb
                }
            }
        };
        await Rifky.sendMessage(m.chat, doc, { quoted: m });  
    } catch (err) {
        console.error(err);
    }
    }
    break;
                case 'userjid':{
          	if(!isCreator) return reply(mess.OnlyOwner)
        const groupMetadata = m.isGroup ? await Rifky.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${mem.id}\n`
        }
      reply(textt)
    }
    break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await Rifky.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Rifky.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
	    case 'ttp':{
	   if (!text) return m.reply(` • *Example* ${prefix + command} NoaMu Chan`)
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: global.pack, // The pack name
		author: global.author, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await Rifky.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'everyone': {
if (!isCreator) return
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Rifky.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: mem, 
		groupMentions: [
			{
				groupSubject: `everyone - [ *${global.namabot}* ] ||`,
				groupJid: m.chat,
			},
		],
	},
});
}
break
case 'bluearchive': {
var archive = JSON.parse(fs.readFileSync('./json/bluearchive.json'))
var hasil = pickRandom(archive)
let deks = `
*Info Characters*
----------------------
_👤Nama : ${hasil.character.name}_
🍁Umur : ${hasil.info.age}
⭐Birthday : ${hasil.info.birthDate}
📈Tinggi : ${hasil.info.height}
📖Sekolah : ${hasil.info.school}
☘️Klub : ${hasil.info.club}
🎯Profile : ${hasil.character.profile}
--------------------------
*Stats*
_⚔️Attack level 1 : ${hasil.stat.attackLevel1}_
⚔️Attack level 100 : ${hasil.stat.attackLevel100}
♻️Max Hp Level 1 : ${hasil.stat.maxHPLevel1}
♻️Max Hp Level 100 : ${hasil.stat.maxHPLevel100}
🛡Devense level 1 : ${hasil.stat.defenseLevel1}
🛡Devense level 100 : ${hasil.stat.defenseLevel100}
💚Heal power level 1 : ${hasil.stat.healPowerLevel1}
💚Heal power level 100 : ${hasil.stat.healPowerLevel100}
🪓Def penetrate level 1: ${hasil.stat.defPenetrateLevel1}
🪓Def penetrate level 100 : ${hasil.stat.defPenetrateLevel100}
🔫Ammo count : ${hasil.stat.ammoCount}
🔫Ammo cost : ${hasil.stat.ammoCost}
🔭Range : ${hasil.stat.range}
🌱Move speed : ${hasil.stat.moveSpeed}
❤️‍🩹Street mood : ${hasil.stat.streetMood}
📌Out door mood : ${hasil.stat.outdoorMood}
🛢Indoor mood : ${hasil.stat.indoorMood}
--------------------------
`
Rifky.sendMessage(m.chat, {
text: deks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: channeljid,
serverMessageId: 103,
newsletterName: channelname
},
externalAdReply: {  
title: `Nama : ${hasil.character.name}`, 
body: `Birthday : ${hasil.info.birthDate}`,
thumbnailUrl: hasil.image.icon, 
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: m }).catch((err) => reply('_⛩️Maaf terjadi Kesalahan!_'))
}
break

case 'quote': {
  try {
    if (!q) return m.reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await Rifky.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break
case 'mediafire': {
	if (!args[0]) return m.reply(`Masukkan url mediafire\nContoh: ${prefix + command} https://www.mediafire.com/××××××××`);
	async function mediafire(link) {
	return new Promise(async(resolve, reject) => {
		try {
			const res = await axios.get(link);
			const $ = cheerio.load(res.data);
			const url = $('a#downloadButton').attr('href');
			const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '').trim();
			const title = url.split('/')[5].split("+").join(" ").split(".").reverse().slice(1).reverse().join(".");
			const type = url.split("/")[5].split('.').reverse()[0];
			resolve({
				title,
				size,
				type,
				url
			});
		} catch (err) {
			reject({
				error: err
			})
		}
	})
}
	m.reply(mess.wait);
	const { title, size, type, url } = await mediafire(args[0]);
	let bjirrbangg = `*Mediafire*\n\nNama: ${title}\Size: ${size}\nMime: ${type}`
  reply(bjirrbangg)
  await Rifky.sendMessage(m.chat, { document: { url: url }, fileName: title, mimetype: type }, { quoted: m })
}
break
        case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Rifky.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await Rifky.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
        case 'pixeldrain': {
	if (!args[0])
		return reply(`Input Pixeldrain URL\n${prefix + command} > Url <\n\nContoh:\n${
		prefix + command
		} https://pixeldrain.com/u/HoGp3Hva\n\n Opsi kedua:\n https://pixeldrain.com/l/2xrapNPF#item=9`);

	if (!/pixeldrain.com\//.test(args[0])) return reply("URL Salah!!");
function formatSize(num) {
	return `${(num / 1000 / 1000).toFixed(2)} MB`;
}

async function fetchFileData(id) {
	const response = await axios.get(
		`https://pixeldrain.com/api/file/${id}/info`,
	);
	const json = response.data;
	const download = `https://pixeldrain.com/api/file/${id}?download`;
	return { download, ...json };
}

async function scrapeListData(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const $ = cheerio.load(html);

		const scriptContent = $("script")
			.toArray()
			.map((script) => $(script).html())
			.find((content) => content.includes("window.viewer_data"));

		if (scriptContent) {
			const viewerDataString = scriptContent.match(
				/window.viewer_data\s*=\s*({.*?});/,
			)[1];
			const viewerData = JSON.parse(viewerDataString);

			const data = viewerData.api_response.files.map((file) => ({
				title: file.name,
				id: file.id,
			}));

			return data;
		} else {
			console.error("window.viewer_data not found");
			return [];
		}
	} catch (error) {
		console.error("Error fetching the page:", error);
		return [];
	}
}
	const url = args[0];
	const fileIdMatch = url.match(/\/u\/(\w+)/);
	const listIdMatch = url.match(/\/l\/(\w+)/);

	if (fileIdMatch) {
		const id = fileIdMatch[1];
		const fileData = await fetchFileData(id);
		const formattedSize = formatSize(fileData.size);
		const sizeMatch = formattedSize.match(/^([\d.]+)\s*(GB|MB)$/i);

		if (!sizeMatch) {
			return m.reply("Unit file size tidak dikenal.");
		}

		const size = parseFloat(sizeMatch[1]);
		const unit = sizeMatch[2].toUpperCase();
		let sizeInMB;

		if (unit === "GB") {
			sizeInMB = size * 1024;
		} else if (unit === "MB") {
			sizeInMB = size;
		} else {
			return m.reply("Unit file size tidak dikenal.");
		}

		const w = "`";

		let message =
			`PixelDrain Downloader\n\n- Name: ${fileData.name}\n` +
			`- Size: ${formattedSize}\n` +
			`- Views: ${fileData.views}\n` +
			`- Downloads: ${fileData.downloads}\n` +
			`- Uploaded: ${fileData.date_upload.split("T")[0]}\n` +
			`- Type: ${fileData.mime_type}\n\n_Sedang Mengirim File..._`;
		await m.reply(message);

		await Rifky.sendMessage(
			m.chat,
			{
				document: { url: fileData.download },
				fileName: fileData.name,
				mimetype: fileData.mime_type,
			},
			{ quoted: m },
		);
	} else if (listIdMatch) {
		Rifky.pixpix = Rifky.pixpix || {};
		const listData = await scrapeListData(url);
		if (listData.length === 0) return m.reply("No files found.");

		const fileList = listData.map((item, index) => ({
			title: item.title,
			id: item.id,
		}));

		const fileListText = fileList
			.map((item, index) => `${index + 1}. ${item.title}`)
			.join("\n");
		const { key } = await reply(`Daftar Hasil:\n\n${fileListText}\n\nBalas pesan ini dengan nomor, link yang ingin ditampilkan.`);
		Rifky.pixpix[m.chat] = {
			list: fileList,
			key,
			timeout: setTimeout(
				() => {
					Rifky.sendMessage(m.chat, { delete: key });
					setTimeout(() => {
						delete Rifky.pixpix[m.chat];
					}, 60 * 1000);
				},
				5 * 60 * 1000,
			),
		};
	} else {
		return reply("URL Salah!!");
	}
}
break
        case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return reply('ID Not Found')
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await Rifky.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  Rifky.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break
case 'pixiv': {
  if (!text) return reply(`Example: ${prefix + command} harimau`);
  async function pixiv(word) {
  var { get } = require("axios")
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}
  m.reply(mess.wait)
  let hannunibakwan = await pixiv(text)
  await Rifky.sendMessage(m.chat, { image: hannunibakwan, caption: "Done" }, { quoted:m });
}
break
        case 'playstore': {
  let [tema, urutan] = text.split(/[^\w\s]/g)
  if (!tema) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]")
  m.reply(mess.wait)
  async function playstore(query) {
  let html = (await axios.get(`https://play.google.com/store/search?q=${query}&c=apps`)).data
  let $ = cheerio.load(html)
  return $("div.VfPpkd-aGsRMb").get().map(x => {
    return {
      title: $(x).find("span.DdYX5").text(),
      rating: $(x).find("span.w2kbF").text(),
      author: $(x).find("span.wMUdtb").text(),
      thumbnail: $(x).find(".j2FCNc img").attr("src").replace("s64", "s256"),
      link: "https://play.google.com" + $(x).find("a.Si6A0c").attr("href")
    }
  })
}
  try {
    let data = await playstore(tema)
    if (!urutan) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    let out = data[urutan - 1]
    let caption = `*I N F O R M A S I*

*Judul Aplikasi:* ${out.title || "-"}
*Link:* ${out.link || "-"}
*ID Produk:* ${out.product_id || "-"}
*Rating:* ${out.rating || "-"}
*Pengembang:* ${out.author || "-"}
*Kategori:* ${out.category || "-"}
*Unduhan:* ${out.downloads || "-"}
*Video:* ${out.video || "-"}
*Thumbnail:* ${out.thumbnail || "-"}
*Gambar Fitur:* ${out.feature_image || "-"}
*Deskripsi:* ${out.description || "-"}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${error.message}`)
  }
}
break
      
        case 'aio': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Rifky.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'ytmp4': case 'ytv': case 'ytvideo': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Rifky.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'ig': case 'instagram': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Rifky.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'fb': case 'facebook': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Rifky.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'top': {
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (!text) return m.reply(`Contoh: .top penyuka tobrut`)
let member = participants.map(u => u.id)
            let top1 = member[Math.floor(Math.random() * member.length)]
            let top2 = member[Math.floor(Math.random() * member.length)]
let top3 = member[Math.floor(Math.random() * member.length)]
            let top4 = member[Math.floor(Math.random() * member.length)]
let top5 = member[Math.floor(Math.random() * member.length)]
            let jawab = `Top 5 *${text}*

1. @${top1.split('@')[0]}
2. @${top2.split('@')[0]}
3. @${top3.split('@')[0]}
4. @${top4.split('@')[0]}
5. @${top5.split('@')[0]}
`
            let menst = [top1, top2, top3, top4, top5]
                    await Rifky.sendText(m.chat, jawab, m, {mentions: menst})
            }
            break
            case 'del': case 'd':{
Rifky.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) return reply(`Query "${text}" not found :/`)
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'nextlibur': {
  m.reply(mess.wait)
  async function nexLibur() {
  const { data } = await axios.get("https://www.liburnasional.com/");
  let libnas_content = [];
  let $ = cheerio.load(data);
  let result = {
    nextLibur:
      "Hari libur" +
      $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
    libnas_content,
  };
  $("tbody > tr > td > span > div").each(function (a, b) {
    let summary = $(b).find("span > strong > a").text();
    let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
    let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
    libnas_content.push({ summary, days, dateMonth });
  });
  return result;
  }
  try {
    let teks = `*${(await nexLibur()).nextLibur}*\n\n`
    let result = (await nexLibur()).libnas_content

    for (let a of result) {
      teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
    }
    reply(teks)
  } catch (e) {
    throw e
  }
}
break
case 'lahelu': {
	let tags = ['lucu', 'relate', 'gaming', 'nostalgia', 'teknologi', 'random', 'komik', 'editan', 'wtf', 'olahraga', 'opini', 'dark', 'absurd', 'cringe', 'sus', 'binatang']
	if(text && !tags.includes(text)) return m.reply(`Meme "${text}" tidak di temukan! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await Rifky.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	if(/^image/i.test(data.media)) return await Rifky.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	}
break
    case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            m.reply(`Hasil Gemini:\n${message}`);
        } else {
            m.reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break
        case 'videy' : {
if (!args[0]) {
    return m.reply(`• Contoh: ${prefix + command} https://videy.co/v?id=K7wdQnbm`);
  }
async function videy(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios(`${url}`, { method: 'get' });
			const $ = cheerio.load(res.data);
			const video = $('source[type="video/mp4"]').attr('src');
			if (video) {
				resolve(video);
			} else {
				throw new Error('Video source not found');
			}
		} catch (error) {
			reject(`Error while fetching the URL: ${error.message}`);
		}
	});
}
  if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
    return m.reply('Link Invalid');
  }

  try {
    let result = await videy(args[0]);
    await Rifky.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
break
 case 'drakor': {
  if (!text) {
    return reply('Contoh: Drakor The Red Sleeve');
  }
  m.reply('Mencari informasi drama Korea...');
  try {
    const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const judul = $('.title').first().text().trim();
    const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
    const link = $('.title').first().find('a').attr('href');
// wm avs    
    if (!konten) {
      throw new Error('Tidak Drakor Itu.');
    }
// wm avs
    const artikel = `*Judul:* ${judul}\n\n*Konten:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
    m.reply(artikel);
  } catch (error) {
    m.reply(`Maaf, terjadi kesalahan: ${error.message}`);
  }
}
break

case 'ebay': {
  if (!q) return m.reply(`Mau cari apa?`);
  const axios = require('axios');
  const cheerio = require('cheerio');
// wm avs
  async function azvxz(query) {
    try { // wm avs
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const results = [];
      $('.s-item').each((index, element) => {
        const title = $(element).find('.s-item__title').text().trim();
        const price = $(element).find('.s-item__price').text().trim();
        const link = $(element).find('.s-item__link').attr('href');
        if (title && title !== "Shop on eBay") { // Jgn Di Hapus Ini
          results.push({ title, price, link });
        }
      });
      return results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
// wm avs
  const query = m.text;
  try {
    const results = await azvxz(query);
// wm avs
    if (results.length === 0) {
      m.reply("Tidak ada hasil ditemukan untuk pencarian Anda.");
    } else {
      let response = "Hasil pencarian eBay:\n\n";
      results.forEach((item, index) => {
        response += `${index + 1}. ${item.title}\nHarga: ${item.price}\nLink: ${item.link}\n\n`;
      });
      m.reply(response);
    }
  } catch (error) {
    m.reply("Terjadi Error.");
  }
}
break

case 'rangkum': {
   if (!q) return m.reply(`Masukkan kalimat Yang Mau di rangkum`);
// wm avs
  const sentences = `${q}`.match(/[^.!?]+[.!?]/g) || [];
// wm avs
  const wordFrequency = {};
  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);
    words.forEach(word => {
      word = word.replace(/[.,!?]/g, '');
      if (word.length > 0) {
        if (wordFrequency[word]) {
          wordFrequency[word]++;
        } else {
          wordFrequency[word] = 1;
        }
      }
    });
  });
// wm avs
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
// wm avs
  const summarySentences = sentences
    .filter(sentence => {
      const words = sentence.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));
      return words.some(word => sortedWords.includes(word));
    })
    .slice(0, 3);
// wm avs
  const summary = summarySentences.join(' ');
// wm avs
  m.reply(summary || "Gagal merangkum teks.");
}
break
case 'animecharacter': {
 if (!text) {
 m.reply('Contoh: animecharacter naruto');
 return;
 }
// wm avs
 m.reply('_Sabar tuan, sedang mencari karakter anime..._');
// wm avs
 async function getCharacterInfo(characterName) {
 const query = `
 query ($search: String) {
 Character(search: $search) {
 name {
 full
 }
 description
 media {
 nodes {
 title {
 romaji
 }
 }
 }
 }
 }
 `;
 const variables = {
 search: characterName
 };
// wm avs
 const response = await fetch('https://graphql.anilist.co', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 'Accept': 'application/json',
 },
 body: JSON.stringify({
 query: query,
 variables: variables
 })
 });
 if (!response.ok) {
 throw new Error('Gagal mengambil data karakter');
 }
// wm avs
 const data = await response.json();
 return data.data.Character;
 }
// wm avs
 try {
 const query = text.trim();
 const characterInfo = await getCharacterInfo(query);
// wm avs
 if (!characterInfo) {
 m.reply('Karakter Gda.');
 return;
 }
// wm avs
 // Format hasil pencarian karakter
 const name = characterInfo.name.full;
 const description = characterInfo.description || 'Deskripsi tidak Ada';
 const mediaTitles = characterInfo.media.nodes.map(node => node.title.romaji).join(', ');
// wm avs
 const formattedDescription = description
 .replace(/\n/g, '\n\n') // jgb ubah
 .replace(/__([^__]+)__/g, '*$1*') // jgn ubah 
 .replace(/~\!?\[([^\]]+)]\(([^)]+)\)~?/g, '*$1* ($2)') // jgn ubah ini
 .replace(/^\s+/gm, '');
// wm avs
 const result = `*Nama Karakter:* ${name}\n\n*Deskripsi:* ${formattedDescription}\n\n*Media Terkait:* ${mediaTitles}`;
// wm avs
 m.reply(result);
// wm avs
 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 }
}
break
        case 'gimage': {
    if (!text) return m.reply(`gimage avosky`)
    m.reply(mess.wait)
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return m.reply('Tidak ada gambar.')
        }
        let imageAvz = images[Math.floor(Math.random() * images.length)]
        Rifky.sendMessage(m.chat, { image: { url: imageAvz }, caption: `*Query* : ${text}\n*Media Url* : ${imageAvz}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi kesalahan.')
    })
}
break

case 'kbbi-kemdikbud': {
    if (!text) return m.reply('contoh kbbi-kemdikbud')
    const axios = require('axios')
    const url = `https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(text)}`
 // wm avs
    axios.get(url).then(response => {
        const cheerio = require('cheerio')
        const $ = cheerio.load(response.data)
        let definition = $('ol').first().text().trim()
 // wm avs       
        if (!definition) {
            return m.reply('Kata tidak ditemukan dalam KBBI.')
        }
 // wm avs        
        Rifky.sendMessage(m.chat, { text: `${definition}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi elol.')
    })
}
break
case 'photoleap': {
 if (!q) return m.reply(`contoh \n\nphotoleAp girl crying`);
  async function textToImageVsky(text) {
    try {
      const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
      return data;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await textToImageVsky(text);
//avosky
  if (result && result.result_url) {
    const imageUrl = result.result_url;
    const message = {
      image: { url: imageUrl },
      caption: 'done nih'
    };
    Rifky.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break

case 'picsum': {
  if (!q) return m.reply(`contoh \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    Rifky.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
  
        case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Rifky.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
        
case 'gsmarena': {
 if (args.length === 0) {
 m.reply('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 m.reply(replyText);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break
case 'igvid': case 'igmp4': {
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await Rifky.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

        case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await Rifky.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Rifky.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break
        case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Tunggu Ya Kaka");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Rifky.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Rifky.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
        case 'play' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply(mess.wait)
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await Rifky.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'self': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = false
m.reply('Sukses Change To Self Mode')
}
break

case 'public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = true
m.reply('Sukses Change To Public Mode')
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
