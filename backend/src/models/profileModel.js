
const {DataTypes} =require('sequelize')

module.exports = (sequelize) => {
    const Profile = sequelize.define('Donation', {
        id: {
            type: DataTypes.INTEGER,
        primaryKey: true,
        }
    }

    )
}