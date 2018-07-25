//packages
var Discord = require("discord.js")
var bot = new Discord.Client();

//configuration stuff
const {apikey} = require("./api-key");

//commands
const {ping} = require("./commands/ping")


var prefix = '>';

bot.on("ready", () => {
    console.log("Bot Launched... ")
})


bot.on("message", (message) => {
    if(message.channel.id === "471768501699346442"){ //checks if the channel is "bot-testing" -- id specific 
        ping(message, prefix);
    }

})

bot.login(apikey);