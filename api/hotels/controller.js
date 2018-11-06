const mongoose      = require('mongoose')
const { httpCodes } = require('../utils')

class HotelController {
    constructor(Hotel) {
        this.error = new Error()

        if (!Hotel) {
            this.error.dependencyError = 'Hotel is undefined'
            throw this.error.dependencyError
        }

        this.hotel = Hotel
    }

    async getHotels(req, res) {
        const queryHotel = req.query.name
        try {
            if (queryHotel) {
                const findHotel = await this.hotel.find({ name: queryHotel })
                if(findHotel) {
                    return res.status(httpCodes.codes.success.code).json({
                        statusCode: httpCodes.codes.success.code,
                        response: {
                            message : 'Find Hotel Successfully!',
                            data    : findHotel
                        }
                    })
                } else {
                    return res.status(httpCodes.codes.notFound.code).json({
                        statusCode: httpCodes.codes.notFound.code,
                        response: {
                            message: 'Hotel not found'
                        }
                    })
                }
            }

            const hotels = await this.hotel.find()

            if (hotels) {
                return res.status(httpCodes.codes.success.code).json({
                    statusCode: httpCodes.codes.success.code,
                    response: {
                        message : 'Get List Hotels Successfully!',
                        data    : hotels
                    }
                })
            } else {
                return res.status(httpCodes.codes.notFound.code).json({
                    statusCode: httpCodes.codes.notFound.code,
                    response: {
                        message: httpCodes.codes.notFound.message
                    }
                })
            }
        } catch (error) {
            return res.status(httpCodes.codes.serverError.code).json({
                statusCode: httpCodes.codes.notFound.code,
                response: {
                    message: httpCodes.codes.notFound.message
                }
            })
        }
        
    }

    async getHotel(req, res) {
        const hotelId = req.params.id
        try {
            const hotel = await this.hotel.findById(mongoose.Types.ObjectId(hotelId))
            if (hotel) {
                return res.status(httpCodes.codes.success.code).json({
                    statusCode: httpCodes.codes.success.code,
                    response: {
                        message : 'Get Hotel Successfully!',
                        data    : hotel
                    }
                })
            } else {
                return res.status(httpCodes.codes.notFound.code).json({
                    statusCode: httpCodes.codes.notFound.code,
                    response: {
                        message: 'Hotel not found'
                    }
                })
            }
        } catch (error) {
            return res.status(httpCodes.codes.serverError.code).json({
                statusCode: httpCodes.codes.notFound.code,
                response: {
                    message: httpCodes.codes.notFound.message
                }
            })
        }
    }
}

module.exports = HotelController