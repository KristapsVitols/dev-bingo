const mongoose = require('mongoose');

exports.initDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useCreateIndex: true});
        console.log('DB connected...');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};