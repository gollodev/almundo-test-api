const express   = require('express')
const router    = express.Router()

const HotelController   = require('./controller')
const HotelRoutes       = require('./routes')
const Hotel             = require('./model')

const hotelController = new HotelController(Hotel)
const hotelRoutes     = new HotelRoutes(router, hotelController)

module.exports = hotelRoutes.setRoutes()