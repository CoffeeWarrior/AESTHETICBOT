# A E S T H E T I C B O T
Making my own bot for discord!

Having used Discord for a long time to chat with friends, I thought it would be a fun project to make a discord bot capable of playing music
joining channels, and for the memes as well!

Note:
In order to use this bot, you will have to specify a config.js file with your exports apikey and prefix


prefix (set in config): !

Commands so far:

!play [songname, or link] <br/>
joins the voicechannel and plays the specified song. If a song is already playing it adds the song to the queue

!skip <br/>
skips the current song. If the song is the only song in queue it leaves the voicechannel

!pause <br/>
pauses the currently playing song

!resume <br/>
resumes the paused song

!volume [1-100 value] <br/>
sets the volume for the song. default value is 25

!queue <br/>
lists out the queue along with the currently playing song

!clear <br/>
clears the queue
