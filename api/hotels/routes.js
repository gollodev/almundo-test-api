
class HotelRoutes {
    constructor(router, controller) {
        this.error = new Error()

        if (!router) {
            this.error.dependencyError = 'express router is undefined'
            throw this.error.dependencyError
        }

        if (!controller) {
            this.error.dependencyError = 'controller is undefined'
        }

        this.router     = router
        this.controller = controller

        this.router.get('/', this.controller.getHotels.bind(this.controller))
        this.router.get('/:id', this.controller.getHotel.bind(this.controller))
        //this.router.get('/search', this.controller.searchHotelByStars.bind(this.controller))
    }

    setRoutes() {
        return this.router
    }
}

module.exports = HotelRoutes