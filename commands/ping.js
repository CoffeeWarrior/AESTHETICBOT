const ping = (message, prefix) => { // could hardcode prefix, but prefix is liable to change
    
    var msg = message.content.toLowerCase();

    if(msg === prefix + "ping"){ //responds to >ping with "Pong!" 
        message.channel.send("Pong!"); 
    
    }
}

module.exports = {ping }