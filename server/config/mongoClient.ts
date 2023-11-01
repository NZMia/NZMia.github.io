import mongoose from 'mongoose';
import config from 'config';
const connectDB = async () => {
  const dbURL = config.get('MONGO_URI');
  try {
    await mongoose.connect(`${dbURL}`);
    console.log('MongoDb Connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    setTimeout(connectDB, 5000);
    process.exit(1);
  }
};
module.exports = connectDB;
