// Ping Module
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
        const interests = [c[2], c[3], c[4]] //fix this lmao

        //const opts = jobs.filter(job => {age >= job.minAge})
        
        const opts = jobs.filter(job => {
            return (
                age >= job.minAge &&
                location == job.location &&
                interests.includes(job.category)
            )
        })
         

        //Print available jobs:
        message.channel.send(`Thank you! You are applicable for ${opts.length} volunteer jobs:`)
        opts.forEach(opt => {
            message.channel.send(`Job Title: ${opt.title}, Description: ${opt.description}, Hours available: ${opt.hours}`);
        })
    },
};