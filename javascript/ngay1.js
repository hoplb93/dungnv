const users = [
    { name: 'Anna', role: 'admin' },
    { name: 'Ben', role: 'user' },
    { name: 'Chris', role: 'admin' }
]


const groupUsersByRole = (users = []) => {
    let newUsers = {}
    let admin = []
    let user = []

    for (let item of users) {
        // if (!newUsers[item.role]) {
        //     newUsers[item.role] = users.filter(user => user.role === item.role)
        // }

        if (item.role == 'admin') {
            admin.push(item)
        } else {
            user.push(item)
        }
    }
    newUsers.admin = admin
    newUsers.user = user
    console.log(newUsers)
    //console.log(admin + '\n' + user)
}

groupUsersByRole(users)

//bai 2
const obj = {
    apple: 3,
    banana: 1,
    orange: 2
}

let convertObjectToArray = (input = {}) => {
    const convertedArray = []
    for (const [key, value] of Object.entries(input)) {
        convertedArray.push([key, value])
    }

    convertedArray.sort((a,b) => b[1] - a[1] )
    console.log(convertedArray)
}

convertObjectToArray(obj)

const str = 'aabbcdecde'

let getFirstNonRepeatCharacter = (input = '') => {
    let freqMap = new Map()
    for (let char of input) {
        !freqMap.has(char) ? freqMap.set(char, 1) : freqMap.set(char, freqMap.get(char) + 1)
    }

    for (let char of new Set(input)) {
        if (freqMap.get(char) == 1) return char
    }
    return null
}

console.log(getFirstNonRepeatCharacter(str))