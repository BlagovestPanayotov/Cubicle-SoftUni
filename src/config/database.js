const mongoose = require('mongoose');

const connectionString = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/cubicle';

module.exports = async (app) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected');
    } catch (err) {

    }
}