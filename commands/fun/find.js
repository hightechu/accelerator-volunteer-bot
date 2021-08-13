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
        const age = c[0]
        const location = c[1]
        const interest1 = c[2]
        const interest2 = c[3]
        const interest3 = c[4]
        message.channel.send(`age: ${age}, location: ${location}, interest1: ${interest1}, interest2: ${interest2}, interest3: ${interest3}`);
        //age location interest1 interest2 interest3
    },
};