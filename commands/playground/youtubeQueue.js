const ytdl = require("ytdl-core");
const {youtubeSearch}  = require("./../music/youtubeSearch");

const youtubeQueue = (queue, connection, voiceChannel) => {
    const streamOptions = {seek: 0, volume: 1};
    
    youtubeSearch(queue[0]).then((ytvid) => {
        console.log(queue);
        const dispatcher = connection.playStream(ytdl(ytvid, {filter:"audioonly"}), streamOptions)
        .on("end", () => {
            queue.shift()
            if(queue.length > 0){
                youtubeQueue(queue, connection);    
            } else {
                playing = false;
                console.log("song ended")
                voiceChannel.leave()
            }
        });

        dispatcher.setVolumeLogarithmic(5 / 5);
    })
    
} 

module.exports = {
    youtubeQueue
}
