const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');

const { Campus, Image } = require('../../db/models');

const router = express.Router();

router.post('/new', asyncHandler(async (req, res) => {
    const {
        campusId,
        url,
        description
    } = req.body

    const image = await Image.create({
        campusId,
        url,
        description
    })

    return res.json(image)
}))

module.exports = router;
