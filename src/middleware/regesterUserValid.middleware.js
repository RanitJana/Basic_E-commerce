const userSchema = require('../models/user.model.js');

const searchValidity = async function (req, res, next) {
    try {
        const user = await userSchema.findOne({
            email: req.body.email
        })
        if (!user) return next();
        req.flash('error', "Account already exist!!");
        res.redirect('/register');
    }
    catch (err) {
        console.log(`Database connection Error : ${err}`);
        process.exit(1);
    }
}

module.exports = searchValidity;