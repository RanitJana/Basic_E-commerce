const userSchema = require('../models/user.model.js');

const searchValidity = async function (req, res, next) {
    try {
        const user = await userSchema.findOne({
            email: req.body.email
        })
        if (!user) {
            if (req.body.password1 != req.body.password2) {
                req.flash('error', "Password didn't match. Please try again");
                return res.redirect('/register');
            }
            return next();
        }
        req.flash('error', "Account already exist!!");
        res.redirect('/register');
    }
    catch (err) {
        console.log(`Database connection Error : ${err}`);
        process.exit(1);
    }
}

module.exports = searchValidity;