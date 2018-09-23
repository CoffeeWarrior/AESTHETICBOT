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
        
        if(queue[0] === "bass boosted soviet russia anthem"){
            dispatcher.setVolume(2)
        }

        dispatcher.on("end", () =>{
            dispatcher.end()
            queue.shift()
            youtubeQueue(queue, connection, voiceChannel, client)
            client.removeListener("message", handleMessage)
        })

        const handleMessage = (message) =>{
            let args = message.content.toLowerCase().split(" ")
            switch(args[0]){
            case prefix + "volume":
                let volume = parseInt(args[1], 10)/100
                if(1 >= volume){
                    dispatcher.setVolume(volume)
                }
                break
            case prefix + "shuffle":
                var newQueue = []
                newQueue.push(queue[0])
                queue.splice(0, 1)
                if(queue.length > 1){
                    for(var i = queue.length; i > 0; i--){
                        let songIndex = Math.floor(i * Math.random())
                        newQueue.push(queue[songIndex])
                        queue.splice(songIndex, 1)
                        console.log(queue.length)
                    }
                    queue.push(newQueue)
                }
                break
            case prefix + "skip":
                dispatcher.end()
                break

            case  prefix + "resume":
                if(dispatcher.paused){
                    dispatcher.resume()
                }
                break

            case prefix + "pause":
                if(!dispatcher.paused){
                    dispatcher.pause()
                }
                break
            case prefix + "disconnect":
                queue.length = 0
                dispatcher.end()
                connection.disconnect()
                message.reply("goodbye")
                break
            case prefix + "queue":
                let queueString = `current song: ${queue[0]} \n`
                for(let i = 1; i < queue.length; i++){
                    queueString = queueString + queue[i] + "\n"
                }
                message.reply(`the queue is: \n ${queueString}`)
                break
            case prefix + "nuke":
            case prefix + "earrape":
            case prefix + "bbr":
                queue.unshift("","bass boosted soviet russia anthem")
                dispatcher.end()
                const rng = Math.floor((Math.random() * 4))
                message.reply(["why would you ask for this? You sick fuck.", "You're a monster...", "Has God truly abondoned us?", "david has tinnitus you know"][rng])
                message.delete()
                break
            default:
            }

        }


        client.on("message", handleMessage)
    })  
} 

module.exports = {
    youtubeQueue
}
