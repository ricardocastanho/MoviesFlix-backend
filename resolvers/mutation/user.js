const User = require('../../models/User')

module.exports = {
    async storeUser(_, { data }){
        let { name, email, password } = data
        let user = await User.create({
            name,
            email,
            password
        })
        console.log(user)
        return user
    }
}