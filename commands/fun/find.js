// Ping Module
module.exports = {
    // Name of Command
    name: 'find',
    // Description of Command
    description: 'Find!',
    //Useage instructions
    usage: '[one two three]',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message, args) {
        const categories = args.toString()
        const c = categories.split(",")
        message.channel.send(`c: ${c}`);
        const a = c.split(',')
        message.channel.send(`a: ${a}`);
        message.channel.send(`c: ${c}`);
        //age location interest1 interest2 interest3
    },
};