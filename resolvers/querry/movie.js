const Movie = require('../../models/Movie')

module.exports = {
    async movies(obj, args, ctx) {
        if(!ctx.user){
            throw new Error("Você não está logado. Faça o login para acessar aos nossos serviços")
        }
        const movies = await Movie.findAll()
        return movies
    }
}