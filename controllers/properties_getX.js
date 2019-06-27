// Database
const db = require('../db')

module.exports = (req, res) => {
	let query = `SELECT * FROM countries`
	if (req.params.country) {
		query += `WHERE country = ${req.params.id}`
	}
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}

// if(req.query.rooms_max || req.query.rooms_min){
// 		if(i!=0){
// 			query +=`AND `
// 			i=0
// 		}
// 		query += `rooms `
// 		if(req.query.rooms_max && req.query.rooms_min){
// 			query += `BETWEEN ${req.query.rooms_min} AND ${req.query.rooms_max} `
// 			i++
// 		}else if(req.query.rooms_min){
// 			query += `> ${req.query.rooms_min} `
// 			i++
// 		}else{
// 			query += `< ${req.query.rooms_max} `
// 			i++
// 		}
// 	}
