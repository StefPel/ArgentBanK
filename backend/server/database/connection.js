const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/argentBankDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, // This line avoids the deprecation warning
    });
    console.log('Database successfully connected');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
