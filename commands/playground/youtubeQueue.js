const ytdl = require("ytdl-core");
const {youtubeSearch}  = require("./../music/youtubeSearch");

const youtubeQueue = (queue, connection, voiceChannel) => {
    
    youtubeSearch(queue[0]).then((ytvid) => {
        console.log(`queue in search ${queue}`)
        
        var dispatcher = connection.playStream(ytdl(ytvid, {filter:"audioonly"}), {seek: 0, volume: 1});
        dispatcher.setVolumeLogarithmic(5 / 5);

        dispatcher.on("end", () => {
            if(queue.length > 1){
                dispatcher.end()
                queue.shift()
                youtubeQueue(queue, connection, voiceChannel);    
            } else {
                playing = false;
                console.log("song ended")
                voiceChannel.leave()
            }
        });

    }).catch(e => console.log(e))
    
} 

module.exports = {
    youtubeQueue
}
