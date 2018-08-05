const Youtube = require("simple-youtube-api")

const {googleapikey} = require("./../../../config")

const youtube = new Youtube(googleapikey)

const ytString = "https://www.youtube.com/watch?v="

//searches youtube for arguments -> should return video link
const youtubeSearch = (args) => {
    return youtube.searchVideos(args).then((result)=> {   
        return youtube.getVideoByID(result[0].id).then(res =>{ 
            const ytLink = ytString + res.id
            return ytLink
        })
    }).catch(() => {return})
}

module.exports = { youtubeSearch }