const {prefix} = require("./../../config")

const help = (client) => {
    client.on("message", (message) => {
        
        if(message.content.toLowerCase() == prefix + "help"){
            message.reply(helpString);
        }
    })
}
    const helpString = `
${prefix}play [songname, or link]
joins the voicechannel and plays the specified song. If a song is already playing it adds the song to the queue

${prefix}disconnect
The bot leaves the channel

${prefix}skip
skips the current song. If the song is the only song in queue it leaves the voicechannel

${prefix}pause
pauses the currently playing song

${prefix}resume
resumes the paused song

${prefix}volume [1-100 value]
sets the volume for the song. default value is 25

${prefix}queue
lists out the queue along with the currently playing song

${prefix}default
plays all default songs
  
${prefix}default [songname or link]
sets a song as one of your defaults
  
${prefix}default list
lists all your default songs
  
${prefix}default remove [number]
removes a default song from the list

${prefix}shuffle
shuffles the current queue to a more randomized version`

module.exports = {
    help
}