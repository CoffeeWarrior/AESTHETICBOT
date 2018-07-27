const {prefix} = require("./../../config");
const {join} = require("./../basic/join");
const ytdl = require("ytdl-core");
const {youtubesearch} = require("./youtubesearch");


//idk how I can export the logic of join()?? maybe just copy over
const music = (client) => {    
    client.on("message", (message) => {
        if (!message.guild){
            return
        }
        if(message.author.bot){
            return
        }
        msg = message.content;
        
        const searchterm = msg.slice(4, message.content.length);

        if(args[0] === prefix + "play" || args[0] === prefix + "p"){
            if(message.member.voiceChannel){
                
                
                message.member.voiceChannel.join()
                .then((connection) => {
                    const streamOptions = {seek: 0, volume: 1}
                    youtubesearch(searchterm).then((ytvid) => {
                            
                        const dispatcher = connection.playStream(ytdl(ytvid, {filter: "audioonly"}), streamOptions)
                        .on("end", () => {
                            console.log("song ended")
                            message.member.voiceChannel.leave()
                        })
                        .on("error", error => {
                            console.error(err);
                        })
                    
                        dispatcher.setVolumeLogarithmic(5 / 5);
                    })
                    const rng = Math.floor((Math.random() * 3));
                })
                .catch((e) => (console.log(e)));
            } else {
                message.reply("You need to be in a channel dipshit")
            }
        }
    })
}

module.exports = {music}