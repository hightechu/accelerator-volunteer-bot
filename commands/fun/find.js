// Ping Module
const jobs = [
    {
        title: 'Animal Shelter Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 10,
        location: 'Victoria',
        category: 'Animals',
        minAge: 14,
    },
    {
        title: 'Kids Soccer Coach Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 15,
        location: 'Richmond',
        category: 'Sports',
        minAge: 16,
    },
    {
        title: 'Food Bank Holiday Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 5,
        location: 'Victoria',
        category: 'Service',
        minAge: 14,
    },
    {
        title: 'Math tutor',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 5,
        location: 'Victoria',
        category: 'Academics',
        minAge: 16,
    },
    {
        title: 'Election Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
        hours: 50,
        location: 'Victoria',
        category: 'Academics',
        minAge: 15,
    },
    {
        title: 'Library Volunteer',
        description: 'wevuewniuewbbewiubewubgwkbgjew gjewbgjewg',
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
        message.channel.send(`Thank you! Here is a list of vounteer jobs you are eligible for: ${opts.length}`)
        opts.forEach(opt => {
            message.channel.send(`Job Title: ${opt.title}, Description: ${opt.description}, Hours available: ${opt.hours}`);
        })
    },
};