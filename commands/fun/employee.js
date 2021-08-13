// Employee Module
module.exports = {
    // Name of Command
    name: 'employee',
    // Description of Command
    description: 'emplowwfwfwyee',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send(`Welcome student! We currently haveavailable!`);
    },
};