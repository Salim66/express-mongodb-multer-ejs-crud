// require mongoose
const mongoose = require('mongoose');

//create a function for mongodb
const createMongoDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Mongo DB server is running'.bgBlue.black);

    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }
}

// export mongodb
module.exports = createMongoDB;