const ytdl = require("ytdl-core")
const {youtubeSearch}  = require("./youtubeSearch")
const {prefix} = require("./../../../config")

const youtubeQueue = (queue, connection, voiceChannel, client) => {
    return youtubeSearch(queue[0]).then((ytVid) => {
        if(queue.length == 0){
            voiceChannel.leave()
            return
        }
        let dispatcher = connection.playStream(ytdl(ytVid, {filter:"audioonly"}), {seek: 0, volume: 1})
        
        dispatcher.setVolume(.5)
            
        dispatcher.on("end", () =>{
            dispatcher.end()
            queue.shift()
            youtubeQueue(queue, connection, voiceChannel, client)
            client.removeListener("message", skip)
        })

        const skip = (message) =>{
            if(message.content.toLowerCase() === prefix + "skip"){
                dispatcher.end()
                
            }
        }

        client.on("message", skip)
    })  
} 

module.exports = {
    youtubeQueue
}
