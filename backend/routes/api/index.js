const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const campusRouter = require('./campus.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/campus', campusRouter);


module.exports = router;
