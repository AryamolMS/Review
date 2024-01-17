

//import dotenv
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./Router/router')

//import connection file
require('./DB/connections')

//create server
const reviewServer = express()

//use cors
reviewServer.use(cors())

//use router
reviewServer.use(router)

//converting to json
reviewServer.use(express.json())

//custamize port
const PORT = 4000 || process.env

//to run 
reviewServer.listen(PORT,()=>{
    console.log(`review-app Server running successfully at port no ${PORT}`);
})


