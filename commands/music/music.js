const {prefix} = require("./../../config");
const {join} = require("./../basic/join");
const ytdl = require("ytdl-core");

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
        const args = msg.split(" ");

        if(args[0] === prefix + "play" || args[0] === prefix + "p"){
            if(message.member.voiceChannel){
                
                
                message.member.voiceChannel.join()
                .then((connection) => {
                    console.log(args[1]);
                    const streamOptions = {seek: 0, volume: 1}

                    const dispatcher = connection.playStream(ytdl(args[1], {filter: "audioonly"}), streamOptions)
                        .on("end", () => {
                            console.log("song ended")
                            message.member.voiceChannel.leave()
                        })
                        .on("error", error => {
                            console.error(err);
                        })
                    
                        dispatcher.setVolumeLogarithmic(5 / 5);


                    const rng = Math.floor((Math.random() * 3));
                    message.reply(["joined baby!", "right here!", "up and running!"][rng]);
                })
                .catch((e) => (message.reply(`Im not able to join that channel. Adjust your perms moron. ${e}`)));
            } else {
                message.reply("You need to be in a channel dipshit")
            }
        }
    })
}

module.exports = {music}