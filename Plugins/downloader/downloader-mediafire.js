const fetch = require('node-fetch');
module.exports = {
    type: 'download',
    command: ['mediafire2', 'mfdl', 'mdf'],
    operate: async (context) => {
        const { Rifky, m, q, prefix, command, reply } = context;
        if (!q) {
            await replu(`Please provide a URL. Example: ${prefix + command} https://www.mediafire.com/file/example`);
        }
        try {
            let response = await fetch(`https://api.betabotz.eu.org/api/download/mediafire?url=${q}&apikey=oCdw6NBC`);
            let data = await response.json();
            let downloadUrl = data.result.url;
            let fileName = data.result.filename;
            await Rifky.sendMessage(m.chat, { 
                document: { url: downloadUrl }, 
                fileName: fileName, 
                mimetype: '*/*' 
            }, { quoted: m });
        } catch (error) {
            console.error('Error:', error);
            await reply('An error occurred while trying to download the file. Please try again later.');
        }
    }
};