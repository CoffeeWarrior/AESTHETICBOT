<h1># A E S T H E T I C B O T</h1>
Making my own bot for discord!

Having used Discord for a long time to chat with friends, I thought it would be a fun project to make a discord bot capable of playing music
joining channels, and for the memes as well!

Note:
In order to use this bot, you need and api key from google and from discord. Use config.example.js and replace the filler with the api key. Then rename the file to config.js


prefix (set in config): !

Commands so far:

<strong>!play [songname, or link] </strong><br/>
joins the voicechannel and plays the specified song. If a song is already playing it adds the song to the queue

<strong>!skip </strong><br/>
skips the current song. If the song is the only song in queue it leaves the voicechannel

<strong>!pause </strong><br/>
pauses the currently playing song

<strong>!resume</strong> <br/>
resumes the paused song

<strong>!volume [1-100 value]</strong> <br/>
sets the volume for the song. default value is 25

<strong>!queue</strong> <br/>
lists out the queue along with the currently playing song

<strong>!clear</strong> <br/>
clears the queue

<strong>!default<strong> <br/>
plays all default songs
  
<strong>!default [songname or link]<strong> <br/>
sets a song as one of your defaults
  
<strong>!default list<strong> <br/>
lists all your default songs
  
<strong>!default remove [number]<strong> <br/>
removes a default song from the list
