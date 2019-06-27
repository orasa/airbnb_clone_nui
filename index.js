const express = require('express')
const path = require('path')
const app = express()
//future used
// require('dotenv').config()
// // API
//
// app.get('/api/properties', require('./controllers/properties_get'))
// app.get('./', (reg, res) => {
// 	res.sendFile(path.join(__dirname, 'client/properties.html'))
// 	console.log('__dirname', __dirname);
// })
//RUN SERVER WITH HEROKU
// app.listen(process.env.PORT, () => {
//   console.log(`Server listening on port ${process.env.PORT}`)
// })



//LINK TO LOCALHOST and PostgreSQL
//Static Files
//Serve every file inside "client" folder as static

app.get('/api/properties', require('./controllers/properties_get'))
app.get('/api/countries', require('./controllers/countries_get'))
// app.get('/api/propertiesX', require('./controllers/properties_getX'))


app.get('/', (req, res) => {
 	res.sendFile(path.join(__dirname, '/client/properties.html'))
	console.log('__dirname', __dirname);
})

app.use(express.static(path.join(__dirname, 'client')))





//Run Server LOCALHOST

app.listen(3000, () => {
	console.log(`Server Listening on port 3000`);
})
