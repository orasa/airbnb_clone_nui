const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

// API











//Run Server

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port $ {process.env.PORT }`)
})
