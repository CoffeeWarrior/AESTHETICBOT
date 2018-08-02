const {prefix} = require("./../../config");
const {youtubeQueue} = require("./musicUtils/youtubeQueue") //goes thru queue and plays songs recursively //params = (queue, connection)


const music = (client, queue) => {
    client.on("message", (message) => {
        if (!message.guild){
            return
        }
        if(message.author.bot){
            return
        }
        msg = message.content;
        
        const searchterm = msg.slice(6, message.content.length);
        const args = msg.split(" ");

        
        if(args[0].toLowerCase() === prefix + "play"){
            queue.push(searchterm); 
            if(message.member.voiceChannel !== message.guild.me.voiceChannel){
                return message.member.voiceChannel.join()
                .then((connection) => {
                    youtubeQueue(queue, connection, message.member.voiceChannel)
                })
                .catch((e) => (console.log(e))); 
            }
        }
    })
}

module.exports = {music}