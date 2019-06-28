const db = require('../db')


// module.exports = (req, res) => {
// 	let query = `SELECT * FROM countries`
// 	if (req.params.country) {
// 		query += `WHERE country = ${req.params.country}`
// 	}
// 	db.query(query, (err, result) => {
// 		if (err) {
// 			res.send(err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }


module.exports = (req, res) => {

	let query = `SELECT *  FROM types`

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
