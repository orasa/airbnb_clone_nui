const db = require('../db')

module.exports = (req, res => {
  let query = `SELECT * FROM products`
  if (reg.params.category) {
    query += `WHERE category =  ${reg.params.category}`
  }
  db.query(query, (err, result) => {
    if (err) {
      res.send(err)
    }else {
      res.send(result.rows)
    }
  })
}