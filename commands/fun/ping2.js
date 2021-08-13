// Ping Module
module.exports = {
    // Name of Command
    name: 'pingtwo',
    // Description of Command
    description: 'Pingtwo!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Pongtwo!');
    },
};