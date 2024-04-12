const express = require('express');
const userSchema = require('../models/user.model.js');
const searchValidity = require('../middleware/regesterUserValid.middleware.js');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.render('register', {
            success: req.flash('success'),
            error: req.flash('error')
        });
    })
    .post('/', searchValidity, async (req, res) => {
        await userSchema.create({
            username: req.body.username,
            password: req.body.password1,
            email: req.body.email,
            fullName: req.body.fullName
        });
        req.flash('success', 'Successfully Registered.\nPlease Login now.');
        res.redirect('/login');
    })

module.exports = router;