//packages
var Discord = require("discord.js")
var client = new Discord.Client();
var ffmpeg = require("ffmpeg-binaries")
//configuration stuff
const {apikey} = require("./config");
const {prefix} = require("./config");
client.login(apikey);


//commands
const {join} = require("./commands/basic/join");
const {music} = require("./commands/music/music");



client.on("ready", () => {
    console.log("Bot Launched... ")
})


music(client)
join(client)