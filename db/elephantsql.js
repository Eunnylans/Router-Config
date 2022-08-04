// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// var conString = "postgres://tojomxkh:THF4eXiNsp6P6DWzonzBKtCU_Yfx97MI@dumbo.db.elephantsql.com/tojomxkh" 
// //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err){
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result){
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });
const pg = require('pg')
const dotenv =require('dotenv') 
dotenv.config({ path: '.env' })
const { Pool } = pg
    const poolConfig = {
      host: 'localhost',
      user: 'postgres',
      port: 5432,
      password: process.env.PSQL,
      database: 'sqltraining',
    }

const pool = new Pool(poolConfig)
module.exports = pool
