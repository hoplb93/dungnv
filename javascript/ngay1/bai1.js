// chuyen mang thanh doi tuong va phan loai theo role
const users = [
    { name: 'Anna', role: 'admin' },
    { name: 'Ben', role: 'user' },
    { name: 'Chris', role: 'admin' }
]

const groupUsersByRole = (input = []) => {
    let newUsers = {}
    let admin = []
    let user = []

    for (let user of input) {
        // if (!newUsers[user.role]) {
        //     newUsers[user.role] = users.filter(user => user.role === user.role)
        // }

        if (user.role == 'admin') {
            admin.push(user)
        } else {
            user.push(user)
        }
    }
    newUsers.admin = admin
    newUsers.user = user
    console.log(newUsers)
    //console.log(admin + '\n' + user)
}

groupUsersByRole(users)