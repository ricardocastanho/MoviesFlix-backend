const jwt = require('jwt-simple')

module.exports = ({ req }) => {
    // get the user token from the headers
    const auth = req.headers.authorization
    const token = auth

    let user = null

    if(token) {
        try {
            let token_content = jwt.decode(token,
                "123")
            if(new Date(token_content.exp * 1000) > new Date()) {
                user = token_content
            }
        } catch(e) {
            return e
        }
    }
    return {
        user
    };
}