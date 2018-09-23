<h1># A E S T H E T I C B O T</h1>
Making my own bot for discord[prefix]

Having used Discord for a long time to chat with friends, I thought it would be a fun project to make a discord bot capable of playing music
joining channels, and for the memes as well[prefix]

Note:
In order to use this bot, you need and api key from google and from discord. Use config.example.js and replace the filler with the api key. Then rename the file to config.js


prefix (set in config): [prefix]

Commands so far:

<strong>[prefix]play [songname, or link] </strong><br/>
joins the voicechannel and plays the specified song. If a song is already playing it adds the song to the queue

<strong>[prefix]disconnect </strong><br/>
The bot leaves the channel

<strong>[prefix]skip </strong><br/>
skips the current song. If the song is the only song in queue it leaves the voicechannel

<strong>[prefix]pause </strong><br/>
pauses the currently playing song

<strong>[prefix]resume</strong> <br/>
resumes the paused song

<strong>[prefix]volume [1-100 value]</strong> <br/>
sets the volume for the song. default value is 25

<strong>[prefix]queue</strong> <br/>
lists out the queue along with the currently playing song

<strong>[prefix]default</strong> <br/>
plays all default songs
  
<strong>[prefix]default [songname or link]</strong> <br/>
sets a song as one of your defaults
  
<strong>[prefix]default list</strong> <br/>
lists all your default songs
  
<strong>[prefix]default remove [number]</strong> <br/>
removes a default song from the list

<strong>[prefix]shuffle</strong> <br/>
shuffles the current queue to a more randomized version