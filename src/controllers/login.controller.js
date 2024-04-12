const userSchema = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');


const isValidLogin = async function (req, res) {
    const { email, password } = req.body;
    const userFind = await userSchema.findOne({
        email: email
    });
    // console.log(userFind);
    if (!userFind) {
        req.flash('error', "No account is there for this email");
        return res.redirect('/login');
    }
    if (!await bcrypt.compare(password, userFind.password)) {
        req.flash('error', "Wrong password!!");
        return res.redirect('/login');
    }
    const id = jwt.sign(
        {
            _id: userFind._id
        },
        process.env.JWT_KEY
    )
    // console.log(id);
    res.cookie('user', id);
    res.redirect('/');
}

module.exports = isValidLogin