const mongoose = require('mongoose');

const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/cart`);
        console.log(`Connection Successful ! Host on : ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log(`Error : ${error}`);
        process.exit(1);
    }
}
module.exports = { connectDB };