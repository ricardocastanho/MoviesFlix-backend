const jwt = require('jwt-simple')

module.exports = {
    async auth(user) {
        const token_validate = Math.floor(Date.now() / 1000)

        const user_info = {
            id: user.id,
            name: user.name,
            email: user.email,
            iat: token_validate,
            exp: token_validate + (3 * 24 * 60 * 60)
        }
        
        return {
            ...user_info,
            token: jwt.encode(user_info,
                "123")
        }
    }
}