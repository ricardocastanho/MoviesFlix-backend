const User = require('../../models/User')
const bcrypt = require('bcrypt');

module.exports = {
    async storeUser(_, { data }){
        let { name, email, password } = data
        
        const salt = bcrypt.genSaltSync()
        password = bcrypt.hashSync(password, salt)

        let user = await User.create({
            name,
            email,
            password
        })
        return user
    }
}