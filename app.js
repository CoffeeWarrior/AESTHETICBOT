//packages
var Discord = require("discord.js")
var client = new Discord.Client()
//configuration stuff
const {apikey} = require("./config")

const {help} = require("./commands/basic/help")


client.login(apikey)



const {music} = require("./commands/music/music")
const queue = []


client.on("ready", () => {
    console.log("Bot Launched... ")
})


music(client, queue)
help(client);