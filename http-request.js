const https = require('https');

module.exports.makeRequest = (options, callback) => {
    var req = https.get(options, (res) => {
        res.setEncoding('utf-8')
        let bodyChunk = ""
        res.on('data', (chunk) => {
            bodyChunk += chunk
        }).on('end', () => {
            try {
                const data = JSON.parse(bodyChunk)
                if (callback) callback({ data })
            } catch (err) {
                if (callback) callback({ error: true })
            }
        })
    })

    req.on('error', (e) => {
        console.log('ERROR: ' + e.message)
        callback({ error: true })
    })
}