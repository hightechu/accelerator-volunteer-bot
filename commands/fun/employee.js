// Employee Module
const jobs = [
    {
        title: 'Animal Shelter Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 10,
        location: 'Victoria',
        category: 'Animals'
        minAge: 14,
    },
    {
        title: 'Kids Soccer Coach Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 15,
        location: 'Richmond',
        category: 'Sports'
        minAge: 16,
    },
    {
        title: 'Food Bank Holiday Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 5,
        location: 'Victoria',
        category: 'Service'
        minAge: 14,
    },
]
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
        message.channel.send(`Welcome student! We currently haveavailable!`); //${jobs.length} 
    },
};