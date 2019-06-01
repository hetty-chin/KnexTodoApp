// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require('mysql')

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile'))

// Exports the connection for other files to use
module.exports = Knex;