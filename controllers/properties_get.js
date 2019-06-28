const db = require('../db.js')

module.exports = (req, res) => {
	let query = `SELECT properties.id, properties.name,
properties.price, properties.image, properties.description,

countries.name As "country",
cities.name AS "city",
types.name AS "type"

FROM properties

LEFT JOIN countries
ON properties.country = countries.id

LEFT JOIN types
ON properties.type = types.id

LEFT JOIN cities
ON properties.city = cities.id`

if (req.query.country) {
		query += ` WHERE country = ${req.query.country}`

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






//WORKING CODE

// module.exports = (req, res) => {
// 	let query = `SELECT * FROM properties `
//
// 	if (req.query.country) {
// 		query += `WHERE country = ${req.query.country}`
// 	}
//
// // query += `LEFT JOIN countries ON properties.country = countries.id`
//
// console.log(query);
//
// 	db.query(query, (err, result) => {
// 		if (err) {
// 			res.send(err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }
