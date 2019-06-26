const db = require('../db')


module.exports = (req, res) => {

	let query = `SELECT * FROM coutries`

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
