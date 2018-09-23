//packages
var Discord = require("discord.js")
var client = new Discord.Client()
//configuration stuff
const {apikey} = require("./config")


client.login(apikey)


const {music} = require("./commands/music/music")
const queue = ["the 1975", "despacito 27", "astronuts", "smells like adult spirit", "tokyo drift", "420 weed 69"]

client.on("ready", () => {
    console.log("Bot Launched... ")
})


music(client, queue)