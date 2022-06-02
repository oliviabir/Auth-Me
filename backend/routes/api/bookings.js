const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { currentUser } = require('../../utils/auth')
const { Booking, User, Campus } = require('../../db/models');



const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const user = currentUser(req)

    const bookings = await Booking.findAll({
        where: {
            userId: user.id
        }
    })

    return res.json(bookings)
}))

const bookingValidators = [
    check('startDate')
        .exists({ checkFalsy: true})
        .withMessage('Please enter a start date'),
    check('endDate')
        .exists({ checkFalsy: true})
        .withMessage('Please enter an end date'),
    handleValidationErrors
]

router.post('/new', bookingValidators, asyncHandler(async (req, res) => {
    const {
        userId,
        campusId,
        startDate,
        endDate
    } = req.body

    const booking = await Booking.create({
        userId,
        campusId,
        startDate,
        endDate
    })

    return res.json(booking)
}))

router.delete('/:bookingId', asyncHandler(async (req, res) => {
    const bookingId = req.params.bookingId

    const booking = await Booking.findByPk(bookingId)

    if (booking) {
        await booking.destroy()
        return res.json(booking.id)
    } else {
        throw new Error('Booking not found')
    }
}))


module.exports = router
