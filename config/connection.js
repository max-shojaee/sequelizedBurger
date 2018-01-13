// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  // Creates mySQL connection using Sequelize
      var sequelize = new Sequelize("kr2dxeuk8g19yzgy", "goirsv0qam8zj23e", "ytxvww6ewbg1zj0h", {
      host: "kavfu5f7pido12mr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
  });
}
else
{
  // Creates mySQL connection using Sequelize
  var sequelize = new Sequelize("burgers_db", "root", "Tabestan_20", {
  host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

// Exports the connection for other files to use
module.exports = sequelize;