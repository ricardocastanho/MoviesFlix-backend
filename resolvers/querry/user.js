const User = require('../../models/User')
const bcrypt = require('bcrypt');
const { auth } = require('./auth/auth')

module.exports = {
    async users(obj, args, ctx) {
        console.log(ctx)
        if(!ctx.user){
            throw new Error("noo")
        }
        const users = await User.findAll()
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