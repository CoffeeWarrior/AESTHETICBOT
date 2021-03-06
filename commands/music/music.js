const {prefix} = require("./../../config")

const {youtubeQueue} = require("./musicUtils/youtubeQueue") //goes thru queue and plays songs recursively //params = (queue, connection)
const fs  = require("fs")


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
        const defaultQueueAddition = msg.slice(8, message.content.length)
        
        // let command = resolve_command()

        // // look for js enum
        // switch(command){
        //     case const.Play:
        //     break;
        //     case const.Skip:
        //     if (music_dispatcher){
        //         md.end();
        //     }
        if(args[0].toLowerCase() === prefix + "default"){
            
            //load default queue or set as empty array
            var defaultQueue = []

            try{
                defaultQueue = JSON.parse(fs.readFileSync(`./users/${message.author.id}.json`))
            } catch(e) {}
            
            //check what to do with queue
            if(args[1]){
                switch(args[1].toLowerCase()){
                case "list":
                    // list out songs in the defaultqueue
                
                    let defaultQueueList = ""
                    for(var i = 0; i < defaultQueue.length; i++){
                        defaultQueueList += `\n[${i}].   ${defaultQueue[i]} `
                    }
                    message.reply(defaultQueueList)
                    break
                case "remove":
                    if(parseInt(args[2], 10) >= 0 && defaultQueue.length >= parseInt(args[2], 10)){
                        
                        // remove song of specified value from array


                        let removedSong = defaultQueue.splice(args[2], 1)
                        fs.writeFileSync(`./users/${message.author.id}.json`, JSON.stringify(defaultQueue))
                        message.reply(`removed song: ${removedSong}`)
                    } else {
                        message.reply("please specify a song on the queue list")
                    }
                    break
                default:
                    defaultQueue.push(defaultQueueAddition)

                    fs.writeFileSync(`./users/${message.author.id}.json`, JSON.stringify(defaultQueue))


                    // defaultQueue.push(defaultQueueAddition)
                    // message.reply(`added "${defaultQueueAddition}" to default queue`)
                }
            } else {    
                queue.push.apply(queue, defaultQueue)
                if(message.member.voiceChannel !== message.guild.me.voiceChannel){
                    message.member.voiceChannel.join()
                        .then((connection) => {
                            youtubeQueue(queue, connection, message.member.voiceChannel, client)
                        })
                        .catch((e) => (e))
                }
            } 
        }

        

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