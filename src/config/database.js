const mongoose = require('mongoose');
const url = require('./config').DB_URL

const connectionString = url;

module.exports = async (app) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(connectionString);
        console.log('Database connected');
    } catch (err) {
        console.error('Error initializing database');
        console.error(err.message);
        process.exit(1);
    }
}