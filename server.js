//1. IMPORT EXPRESS
const { urlencoded } = require("express")
const express = require('express')
const app = express()
const port = 8000

require("./config/mongoose.config")
// 2. Configuration for your express server 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 3. Define routes for your express server
const jokeRoutes = require("./routes/joke.routes")
jokeRoutes(app)
//4. Run your express server

app.listen(port, () => console.log("EXPRES"))