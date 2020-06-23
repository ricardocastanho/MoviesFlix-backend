const { Model, DataTypes } = require('sequelize')

class Movie extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Movie