const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        success: req.flash('success'),
        error: req.flash('error')
    });
});


module.exports = router;
