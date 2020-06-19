const User = require('../../models/User')
const bcrypt = require('bcrypt');
const { auth } = require('./auth/auth')

module.exports = {
    async users() {
        const users = await User.findAll()
        console.log("asdasd")
        return users
    },
    async login(_, { data }) {
        const user = await User.findOne({
            where: {
                email: data.email
            }
        })
        if(!user) {
            throw new Error('Usuário/Senha inválido')
        }

        const password_authenticate = bcrypt.compareSync(data.password,
            user.password)

        if(!password_authenticate) {
            throw new Error('Usuário/Senha inválido')
        }
        return auth(user)
    }
}