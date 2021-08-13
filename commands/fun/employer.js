// Employer Module
module.exports = {
    // Name of Command
    name: '!employer',
    // Description of Command
    description: 'employer',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send('Welcome employer! We currently have "x" employees, please state the minimum age, location and time. Please write the info in the stated order.');
            // Execute Command - Parameters: message
    //execute(message)
        // Send Message
        message.channel.send('Now please tell us what type of volunteering you are offering by reacting with the emojis below. (animal care, supervising children, charity.)');
        // Add Reaction
        sentMessage.react(':dog:');
        // Add Reaction
        sentMessage.react(':baby:');
        // Add Reaction
        sentMessage.react(':dollar:');
    },
};