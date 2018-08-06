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
        
        dispatcher.setVolume(.25)
            
        dispatcher.on("end", () =>{
            dispatcher.end()
            queue.shift()
            youtubeQueue(queue, connection, voiceChannel, client)
            client.removeListener("message", handleMessage)
        })

        const handleMessage = (message) =>{
            let args = message.content.toLowerCase().split(" ")
            if(args[0] === prefix + "volume"){
                let volume = parseInt(args[1], 10)/100
                if(1 >= volume){
                    dispatcher.setVolume(volume)
                }
            }
            
            if(message.content.toLowerCase() === prefix + "skip"){
                dispatcher.end()
                
            }

            if(dispatcher.paused){
                if(message.content.toLowerCase() === prefix + "resume"){
                    dispatcher.resume()
                }
                
            } else {    
                if(message.content.toLowerCase() === prefix + "pause"){
                    dispatcher.pause()
                }

            }

        }


        client.on("message", handleMessage)
    })  
} 

module.exports = {
    youtubeQueue
}
