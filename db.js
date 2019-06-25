
//require package
const {Client} = require('pg')

//create connection
const db = new Client({
	connectionString: process.env.DATABASE_URL
})

//connect to heroku database
db.connect((err) => {
	if(err) {
		console.log("Error connecting  to PostgresSQL database");
	}else {
		console.log('Connect to PostgressSQL database');
	}
})

module.exports = db
