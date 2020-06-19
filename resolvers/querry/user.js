const User = require('../../models/User')

module.exports = {
    async users() {
        const users = await User.findAll()
        console.log("asdasd")
        return users
    }
}