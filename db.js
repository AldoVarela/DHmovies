const Sequelize = require('sequelize');	

const sequelize = new Sequelize('movies_db', 'root', 'pantera', {
    host:'localhost', 
    port:'3306',
    dialect: 'mysql', 
})