require('dotenv').config();
const { connectDB } = require('./database/db.js');
const app = require('./app.js');


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server started at port : ", process.env.PORT);
        });
    })
    .catch(err => {
        console.log(`An error occured!! Error : ${err}`);
    })