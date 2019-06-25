const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

// API

app.get('api/propterties', require('./controllers/properties_get'))




//Static Files
//Serve every file inside "client" folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('./', (reg, res) => {
	res.sendFile(path.join(__dirname, 'client/properties.html'))
	console.log('__dirname', __dirname);
})



//Run Server

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})
