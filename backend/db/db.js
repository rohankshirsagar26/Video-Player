const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/VideoPlayer');
        console.log(`Connected to DB ${connection.connection.name}`);
    } catch (error) {
        console.log(`Error connecting to DB: ${error.message}`);
    }
}

module.exports = connectDB;