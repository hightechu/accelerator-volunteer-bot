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
        //age location interest1 interest2 interest3

        // Send Message
        message.channel.send(`Here is your input: ${c}`);
    },
};