const checkValid = (req, res, next) => {
    console.log(req.cookies.user);
    if (req.cookies.user) return next();
    req.flash('error', 'Please Login or Register First');
    return res.redirect('/login');
}

module.exports = checkValid