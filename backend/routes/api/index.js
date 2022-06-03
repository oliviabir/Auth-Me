const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const campusRouter = require('./campus.js')
const bookingRouter = require('./bookings.js')
const imageRouter = require('./image.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/campus', campusRouter);
router.use('/bookings', bookingRouter);
router.use('/image', imageRouter)



module.exports = router;
