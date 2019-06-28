const db = require('../db.js')

module.exports = (req, res) => {

let query = `SELECT
FROM properties

`LEFT JOIN countries ON properties.country = countries.id
`LEFT JOIN country
ON properties.country = country.id

LEFT JOIN type
ON properties.type = type.id `

	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}

	console.log(Object.keys(req.query))

	for (i = 0; i < Object.keys(req.query).length; i++) {

		if (Object.keys(req.query)[i]=='country' && i==0){
			query += `country.id = ${req.query.country}`
		}else if(Object.keys(req.query)[i]=='country'){
			 query += `and country.id = ${req.query.country}`
		}

	}

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
