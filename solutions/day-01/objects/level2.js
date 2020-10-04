import {countries} from './../countries.js'

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Ex 1
let maxSkills = 0;
let mostSkilledPersonKey = '';
Object.keys(users).forEach(userKey => {
    let skills = users[userKey].skills.length;
    if(skills > maxSkills) {
        maxSkills = skills
        mostSkilledPersonKey = userKey
    }
});

console.log('Most skilled person:')
console.log(users[mostSkilledPersonKey])


// Ex 2
let loggedInWithAtLeast50Points = 0;
Object.keys(users).forEach(key => {
    const user = users[key]
    if(user.isLoggedIn && user.points >= 50) {
        loggedInWithAtLeast50Points++
    }
})
console.log(loggedInWithAtLeast50Points)


// Ex 3
let mernDevelopers = []
Object.keys(users).forEach(key => {
    const user = users[key]
    if(user.skills.includes('MongoDB')
    && user.skills.includes('Express')
    && user.skills.includes('React')
    && user.skills.includes('Node')) {
        mernDevelopers.push(user);
    }
})
console.log('Mern developers: ', mernDevelopers)

// Ex 4
const newUsers = {
    Lukasz: {
        email: 'jozwiklukasz@outlook.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'C#', 'Azure', ],
        age: 27,
        isLoggedIn: true,
        points: 100
    },
    ...users
}
console.log(newUsers)

// Ex 5
console.log(Object.keys(newUsers))

// Ex 6
Object.keys(newUsers).forEach(el => console.log(newUsers[el]))

// Ex 7 - ?? where are capital, populations and languages?