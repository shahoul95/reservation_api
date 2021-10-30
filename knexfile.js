// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: process.env.AUTHDATABASE,
    connection: {
      host : process.env.HOST,
      port : process.env.PORTS,
      user : process.env.USERS,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    },
    useNullAsDefault: true
  },




};
