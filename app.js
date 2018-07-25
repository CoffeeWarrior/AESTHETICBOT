var Discord = require("discord.js")
var bot = new Discord.Client();

const {apikey} = require("./api-key");


var prefix = '>';

bot.on("ready", () => {
    console.log("Bot Launched... ")
})


bot.on("message", (message) => {
    var sender = message.author;
    var msg = message.content.toLowerCase();

    var prefix = ">";
    if(message.channel.id === "471768501699346442"){ //checks if the channel is "bot-testing" -- id specific 
        if(msg === prefix + "ping"){
            console.log(message);
            message.channel.send("Pong!"); 
        }
    }

})

bot.login(apikey);