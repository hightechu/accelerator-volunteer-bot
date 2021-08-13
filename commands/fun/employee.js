// Employee Module
const categories = ["Animals", "Sports", "Service", "Academics", "Food", "Nature"]

const jobs = [
    {
        title: 'Animal Shelter Volunteer',
        description: 'Helping care for animals at the downtown shelter',
        hours: 10,
        location: 'Victoria',
        category: 'Animals',
        minAge: 14,
    },
    {
        title: 'Kids Soccer Coach Volunteer',
        description: 'Coaching kids soccer on Saturdays',
        hours: 15,
        location: 'Richmond',
        category: 'Sports',
        minAge: 16,
    },
    {
        title: 'Food Bank Holiday Volunteer',
        description: 'Helping pack bags of food for the holiday season',
        hours: 5,
        location: 'Victoria',
        category: 'Service',
        minAge: 14,
    },
    {
        title: 'Math tutor',
        description: 'Tuoring grade students in math',
        hours: 5,
        location: 'Victoria',
        category: 'Academics',
        minAge: 16,
    },
    {
        title: 'Election Volunteer',
        description: 'Helping organize lines of people coming to vote',
        hours: 50,
        location: 'Victoria',
        category: 'Academics',
        minAge: 15,
    },
    {
        title: 'Library Volunteer',
        description: 'You will be stocking shelves at the downtown library.',
        hours: 45,
        location: 'Victoria',
        category: 'Academics',
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
    cooldown: 5,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        const c = categories.join(', ');

        message.channel.send(`Welcome student! We currently have ${jobs.length} jobs available!`);
        message.channel.send('To find a job, please enter your info in this format: !find [age location interest interest interest]');
        message.channel.send(`Categories: ${c}`);
    },
};