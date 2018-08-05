const {prefix} = require("./../../config")
const {youtubeQueue} = require("./musicUtils/youtubeQueue") //goes thru queue and plays songs recursively //params = (queue, connection)

const music = (client, queue) => {
    let music_dispatcher = null
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
            if(message.member.voiceChannel !== message.guild.me.voiceChannel){
                message.member.voiceChannel.join()
                    .then((connection) => {
                        return youtubeQueue(queue, connection, message.member.voiceChannel, client)
                    })
                    .catch((e) => (console.error(e)))
            }
        }
    })
}

module.exports = {music}