const {prefix} = require("./../../config")
const {youtubeQueue} = require("./musicUtils/youtubeQueue") //goes thru queue and plays songs recursively //params = (queue, connection)

const music = (client, queue) => {
    client.on("message", (message) => {
        if (!message.guild){
            return
        }
        if(message.author.bot){
            return
        }
        const msg = message.content
        
        const searchterm = msg.slice(6, message.content.length)
        const args = msg.split(" ")
        
     
        // let command = resolve_command()

        // // look for js enum
        // switch(command){
        //     case const.Play:
        //     break;
        //     case const.Skip:
        //     if (music_dispatcher){
        //         md.end();
        //     }


        if(args[0].toLowerCase() === prefix + "play"){
            queue.push(searchterm)
            const rng = Math.floor((Math.random() * 3))
            message.reply(["Coming right up!", "You got it.", "Good choice!"][rng])
            if(message.member.voiceChannel !== message.guild.me.voiceChannel){
                message.member.voiceChannel.join()
                    .then((connection) => {
                        return youtubeQueue(queue, connection, message.member.voiceChannel, client)
                    })
                    .catch((e) => (e))
            }
        }
    })
}

module.exports = {music}