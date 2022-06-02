const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const campusRouter = require('./campus.js')
const bookingRouter = require('./bookings.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/campus', campusRouter);

router.use('/bookings', bookingRouter)


module.exports = router;
