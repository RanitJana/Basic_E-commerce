const express = require('express');
const router = express.Router();
const isValid = require('../middleware/userLoginValid.middleware.js');

router.get('/', isValid, (req, res) => {
    res.render('home', {
        success: req.flash('success'),
        error: req.flash('error')
    });
});


module.exports = router;
