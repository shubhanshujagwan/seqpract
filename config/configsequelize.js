const {Sequelize} = require('sequelize');


const sequelize = new Sequelize(
    "test",
    "root",
    "test@1234",
     {
  host: 'localhost',
  port:3306,
  dialect: 'mysql'
});

// console.log(sequelize)
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

module.exports=sequelize
