const checkValid = (req, res, next) => {
    if (req.cookies.user) return next();
    req.flash('error', 'Please Login or Register First');
    return res.redirect('/login');
}

module.exports = checkValid