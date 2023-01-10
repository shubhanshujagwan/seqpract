const { DataTypes } = require('sequelize');
const sequelize = require('../config/configsequelize');

// console.log(sequelize)


const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
    timestamps: false
    }
)

module.exports = User