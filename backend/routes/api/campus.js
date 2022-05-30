const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Campus } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler((req, res) => {
    const campuses = await Campus.findAll()

    return res.json(campuses)
}))

router.get('/:id(\\d+)', asyncHandler((req, res) => {
    const campusId = req.params.campusId

    const campus = await Campus.findByPk(campusId)

    return res.json(campus)
}))


module.exports = router;
