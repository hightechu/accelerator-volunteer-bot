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
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message, args) {
        const categories = args.split(" ")

        const c = categories.join(', ');

        // Send Message
        message.channel.send(`Here is your input: ${c}`);
    },
};