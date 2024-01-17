

//import express 
const express = require('express')

//import controller
const reviewController = require('../controller/reviewController')

//create an object for router class
const router = new express.Router()

//setup path to resolve request
   router.post('/review/data',reviewController.details)

//export router
module.exports = router   