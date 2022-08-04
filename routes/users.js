var express = require('express');
var router = express.Router();
const pool = require('../db/elephantsql')

/* GET users listing. */
router.post('/add', async function(req, res, next) {
  try {
const Firstname = "Eunice"
const Lastname = "Igbinedion"
    const { rows } = await pool.query(
      'INSERT INTO Users (Firstname, Lastname) values($1,$2) RETURNING *',
      [Firstname, Lastname]
    )
    res.json(rows);
  } catch (error) {
    console.error(error.message)
  }
 
});

module.exports = router;
