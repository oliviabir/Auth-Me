const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const { Campus, Image } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    console.log('CAMPUS GET ALL ROUTE HIT')
    const campuses = await Campus.findAll({
        include: Image
    })

    return res.json(campuses)
}))

router.get('/:campusId(\\d+)', asyncHandler(async(req, res) => {
    console.log('CAMPUS GET ONE ROUTE HIT')
    const campusId = req.params.campusId

    const campus = await Campus.findByPk(campusId, {
        include: [{
            model: Image,
            where: {
                campusId: campusId
            }
        }]
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
    check('tuition')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Tuition'),
    handleValidationErrors
]

router.post('/new', campusValidators, asyncHandler(async (req, res) => {
    console.log('CAMPUS POST ROUTE HIT')
    console.log(req.body, 'BACKEND -- REQ BODY')
    const {
        userId,
        name,
        city,
        state,
        description,
        tuition,
        inStatetuition,
        public,
        private,
        url,
        alt
    } = req.body

    const campus = await Campus.create({
        userId,
        name,
        city,
        state,
        description,
        tuition,
        inStatetuition,
        public,
        private,
    })

    const image = await Image.create({
        campusId: campus.id,
        url,
        alt
    })

    const campusWithImage = await Campus.findByPk(campus.id, {
        include: Image
    })

    const testcampusWithImage = await Campus.findByPk(2, {
        include: Image
    })

    console.log('CAMPUS WITH IMAGE*********************', campusWithImage.Images)
    console.log(' **** TEST CAMPUS WITH IMAGE*********************', testcampusWithImage.Images)
    return res.json(campusWithImage)
}))

router.put('/:id', campusValidators, asyncHandler(async (req, res) => {
    console.log('CAMPUS PUT ROUTE HIT')
    const id = req.params.id

    await Campus.update(req.body, {
        where: { id }
    })

    const campus = await Campus.findByPk(id)
    return res.json(campus)
}))

router.delete('/:campusId', asyncHandler(async (req, res) => {
    console.log('CAMPUS DELETE ROUTE HIT')
    const campusId = req.params.campusId
    // console.log('DELETE ROUTER HIT')

    const campus = await Campus.findByPk(campusId)
    console.log(campus, '************BACKEND DELETE CAMPUS -- CAMPUS*******')

    if (campus) {
        await campus.destroy()
        return res.json(campus.id)
    } else {
        throw new Error('Campus not found')
    }
}))

module.exports = router;
