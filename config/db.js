import mongoose from "mongoose";

export const connectDB = async () => {
const MONGODB_URI = 'mongodb+srv://ledionlamce_db_user:7EgZ0EyWufzNow3V@express-testing.x00lrcm.mongodb.net/Express-testing';

await mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
};