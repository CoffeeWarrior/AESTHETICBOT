const ytdl = require("ytdl-core");
const {youtubeSearch}  = require("./youtubeSearch");

const youtubeQueue = (queue, connection, voiceChannel) => {
    return youtubeSearch(queue[0]).then((ytVid) => {
        if(queue.length == 0){
            voiceChannel.leave()
            return
        }
            let dispatcher = connection.playStream(ytdl(ytVid, {filter:"audioonly"}), {seek: 0, volume: 1});
        
            dispatcher.setVolume(.5);
            
            dispatcher.on("end", () =>{
                dispatcher.end()
                queue.shift()
                youtubeQueue(queue, connection, voiceChannel)
            })            
            return dispatcher;
    })  
} 

module.exports = {
    youtubeQueue
}
