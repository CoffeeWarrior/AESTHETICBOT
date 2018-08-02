const ytdl = require("ytdl-core");
const {youtubeSearch}  = require("./youtubeSearch");

const youtubeQueue = (queue, connection, voiceChannel) => {
    return youtubeSearch(queue[0]).then((ytvid) => {
        if(queue.length == 0){
            voiceChannel.leave()
            return
        }
        return new Promise((resolve, reject) => {
            var dispatcher = connection.playStream(ytdl(ytvid, {filter:"audioonly"}), {seek: 0, volume: 1});
            dispatcher.setVolumeLogarithmic(1);
            dispatcher.on("end", ( ) =>{
                dispatcher.end()
                resolve()
            })
        }).then(() => {
            queue.shift()
            youtubeQueue(queue, connection, voiceChannel);
        }).catch(e => console.log(e))
    })  
} 

module.exports = {
    youtubeQueue
}
