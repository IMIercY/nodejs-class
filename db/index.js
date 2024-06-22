import mongoose from 'mongoose';

const connectToDb = async () =>
  // Please cross check the MongoDB Atlas connection string with the one you get in your MongoDB Atlas account
  // Replace @cluster0.mzgiikv.mongodb.net/?retryWrites=true&w=majority with the equivalent string that you get from your account
  await mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster007.lca3b9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007`
  );

export default connectToDb;
