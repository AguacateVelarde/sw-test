const { DB } = require( '@swback/config' )

var _mysql = require('knex')({
  client: 'mysql',
  connection: DB
})

module.exports = {
  database : _mysql
}