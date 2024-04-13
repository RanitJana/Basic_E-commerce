const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const isValid = require('./middleware/userLoginValid.middleware.js');
const app = express();



//configure
app
    .set('views', './src/views')  //Default it'll search for 'viwes' repo in root directory. This method is used to manually specify the path of the 'views' repo.
    .set('view engine', 'ejs')
    .use(express.urlencoded({ extended: false }))
    .use(session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    }))
    .use(flash())
    .use(cookieParser())
    .use(express.static('./src/public'))


//routes
app
    .use('/login', require('./routes/login.route.js'))
    .use('/register', require('./routes/register.route.js'))
    .use(isValid)   //from this point , below routes are secured
    .use('/', require('./routes/home.route.js'))
    .use('/profile', require('./routes/profile.route.js'))
    .all('*', (req, res) => { res.render('pageNotFound') })

module.exports = app;