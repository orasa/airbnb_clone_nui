const db = require('../db')


// module.exports = (req, res) => {
//
// 	let query = `SELECT * FROM properties`
//
// 	db.query(query, (err, result) => {
// 		if (err) {
// 			res.send(err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }

module.exports = (req, res) => {
		let query = `SELECT * FROM properties `
	 if (req.query.country) {
	 // left space after properties so when it concate with next
		query += `WHERE country = ${req.query.country} `// left space just incase
		query += `LEFT JOIN countries ON properties.country = countries.id`

	} else {
		let query = `SELECT properties.id, properties.name, properties.price, types.name FROM properties ` // left space after properties so when it concate with next

		query += `LEFT JOIN types ON properties.type = types.id`
	}



console.log(query);

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
