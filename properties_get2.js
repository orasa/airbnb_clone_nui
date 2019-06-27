let query = `SELECT properties.id,properties.name,properties.rating,
properties.rooms,city.id as city,country.id as country,type.id as roomtype,properties.price,properties.plus,properties.image

FROM properties

LEFT JOIN city

ON properties.city = city.id
LEFT JOIN country
ON properties.country = country.id
LEFT JOIN type
ON properties.type = type.id `



module.exports = (req, res) => {
	if (req.query.country) {
		let query = `SELECT * FROM properties ` // left space after properties so when it concate with next
		query += `WHERE country = ${req.query.country} `// left space just incase
		query += `LEFT JOIN countries ON properties.country = countries.id`
	} else {
		let query = `SELECT properties.id, properties.name, properties.price, types.type FROM properties ` // left space after properties so when it concate with next

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
