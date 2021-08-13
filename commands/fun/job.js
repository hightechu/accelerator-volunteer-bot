// Ping Module
module.exports = {
    // Name of Command
    name: 'job',
    // Description of Command
    description: 'Job!',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Pong!');
    },
};