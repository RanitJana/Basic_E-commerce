const express = require('express');
const userSchema = require('../models/user.model.js');
const isValidLogin = require('../controllers/login.controller.js');
const router = express.Router();

router
    .get('/', (req, res) => {

        res.render('login', {
            success: req.flash('success'),
            error: req.flash('error')
        });
    })
    .post('/', isValidLogin)
module.exports = router;