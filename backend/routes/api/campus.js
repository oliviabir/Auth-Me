const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const { requireAuth } = require('../../utils/auth');
const { Campus, Image } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const campuses = await Campus.findAll({
        include: Image
    })

    return res.json(campuses)
}))

router.get('/:campusId(\\d+)', asyncHandler(async(req, res) => {
    const campusId = req.params.id

    const campus = await Campus.findByPk(campusId, {
        include: Image
    })

    return res.json(campus)
}))

const campusValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Name')
        .isLength({ max: 100 })
        .withMessage('Name must not be longer than 100 characters'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for City')
        .isLength({ max: 50 })
        .withMessage('Name must not be longer than 50 characters'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for State')
        .isLength({ max: 50 })
        .withMessage('Name must not be longer than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Description'),
    check('tuiton')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Tuition'),
    handleValidationErrors
]

router.post('/new', requireAuth, campusValidators, asyncHandler(async(req, res) => {
    const {
        name,
        city,
        state,
        description,
        tuition,
        inStateTuition,
        public,
        private
    } = req.body

    const campus = Campus.build({
        name,
        city,
        state,
        description,
        tuition,
        inStateTuition,
        public,
        private
    })

    return res.json(campus)
}))

module.exports = router;
