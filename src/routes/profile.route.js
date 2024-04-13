require('dotenv').config();
const express = require('express');
const { jwtDecode } = require('jwt-decode');
const userSchema = require('../models/user.model.js');
const isValid = require('../middleware/userLoginValid.middleware.js');
const router = express.Router();

router.get('/', isValid, async (req, res) => {
    const userId = jwtDecode(req.cookies.user, process.env.JWT_KEY);
    const userInfo = await userSchema.findOne({
        _id: userId._id
    })
    const name = userInfo.fullName, username = userInfo.username;
    res.render('profile', {
        name: name,
        username: username
    });
})

module.exports = router;