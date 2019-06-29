// require package
const {Client} = require('pg')

 // create connection HEROKU
const db = new Client({
	connectionString: process.env.DATABASE_URL
})

//  create connection with localhost
// const db = new Client({
// 	connectionString: 'postgres://orasaoneal:@localhost:5432/airbnb_clone'
// })

// connect to database
db.connect((err) => {
	if (err) {
		console.log('Error connecting to PostgreSQL database')
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

module.exports = db
