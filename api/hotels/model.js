const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const HotelsSchema = new Schema({
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: [String]
})

module.exports = mongoose.model('Hotels', HotelsSchema)