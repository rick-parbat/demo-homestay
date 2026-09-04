const mongoose = require('mongoose');

let mongoServer;

const connectDB = async () => {
  // If MONGO_URI is set to a real Atlas/local URI, use it directly
  const uri = process.env.MONGO_URI;

  // Check if it's the default local URI — if so, try in-memory fallback
  const isLocalDefault = !uri || uri.includes('localhost') || uri.includes('127.0.0.1');

  if (isLocalDefault) {
    try {
      // Try connecting to local MongoDB first
      await mongoose.connect(uri || 'mongodb://localhost:27017/homestay', {
        serverSelectionTimeoutMS: 3000,
      });
      console.log(`MongoDB connected: ${mongoose.connection.host} (local)`);
      return;
    } catch {
      console.log('Local MongoDB not available, starting in-memory server...');
      // Fall back to in-memory MongoDB
      const { MongoMemoryServer } = require('mongodb-memory-server');
      mongoServer = await MongoMemoryServer.create();
      const memUri = mongoServer.getUri();
      await mongoose.connect(memUri);
      console.log(`MongoDB connected: in-memory (${memUri})`);
      console.log('⚠  Data will not persist between restarts. Set MONGO_URI in .env for persistence.');
      return;
    }
  }

  // External URI (Atlas, etc.)
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

// Clean up in-memory server on shutdown
process.on('SIGINT', async () => {
  if (mongoServer) {
    await mongoose.disconnect();
    await mongoServer.stop();
  }
  process.exit(0);
});

module.exports = connectDB;
