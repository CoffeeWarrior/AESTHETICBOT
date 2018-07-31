const ytdl = require("ytdl-core");
const {youtubeSearch}  = require("./../music/youtubeSearch");

const youtubeQueue = (queue, connection, voiceChannel) => {
    
    youtubeSearch(queue[0]).then((ytvid) => {
        console.log(`queue in search ${queue}`)
        
        var dispatcher = connection.playStream(ytdl(ytvid, {filter:"audioonly"}), {seek: 0, volume: 1});
        dispatcher.setVolume(.5);

        dispatcher.on("end", () => {
            queue.shift()
            if(queue.length > 0){
                dispatcher.end()
                youtubeQueue(queue, connection, voiceChannel);    
            } else {
                dispatcher.end()
                voiceChannel.leave()
            }
        });

    }).catch(e => console.log(e))
    
} 

module.exports = {
    youtubeQueue
}
