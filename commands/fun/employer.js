// Employer Module
const categories = ["Animals", "Sports", "Service", "Academics", "Food", "Nature"]

module.exports = {
    // Name of Command
    name: 'employer',
    // Description of Command
    description: '!employer',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        const c = categories.join(', ');
        message.channel.send('Welcome employer! To add a volunteer position, please type !job [minimum age location hours category].');
        message.channel.send(`The categories are: ${c}`);
    },
};