const {prefix} = require("./../../config");

join = (client) => {
    client.on("message", (message) => {
        if (!message.guild){
            return
        }
    
        if(message.content === prefix + "join"){
            if(message.member.voiceChannel){
                message.member.voiceChannel.join()
                .then((connection) => {
                    const rng = Math.floor((Math.random() * 3));
                    message.reply(["joined baby!", "right here!", "up and running!"][rng]);
                })
                .catch((e) => (message.reply("Im not able to join that channel. Adjust your perms moron.")));
            } else {
                message.reply("You need to be in a channel dipshit")
            }
        }
    })
}

module.exports = { join } 