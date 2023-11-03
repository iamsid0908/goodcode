import mongoose from "mongoose";

const connectMongo = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.MONGO_URI, {
        autoIndex: true,
      })
      .then(() => {
        console.log('Mongo connected');
        resolve('Mongo connected');
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

export { connectMongo };
