const {prefix} = require("./../../config");
const {youtubeQueue} = require("./youtubeQueue") //goes thru queue and plays songs recursively //params = (queue, connection)


const music = (client) => {
    const queue = [];
    var playing = false; //works as flag to know whether to run join() again or not
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

        
        if(args[0].toLowerCase() === prefix + "play" || args[0].toLowerCase() === prefix + "p"){
            queue.push(searchterm);
            console.log(`queue in music ${queue}`)
            if(!playing){    
                playing = true; 
                if(message.member.voiceChannel){
                    message.member.voiceChannel.join()
                    .then((connection) => {
                        youtubeQueue(queue, connection, message.member.voiceChannel)
                    })
                    .catch((e) => (console.log(e))); 
                }
            }
        }
    })
}

module.exports = {music}