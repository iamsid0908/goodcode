import 'dotenv/config'
import { connectMongo } from './db'
import credentials from './config/firebase-adminsdk-key.json'
import firebaseAdmin from 'firebase-admin'
import express from 'express';
import morgan from 'morgan';
import { Gateway } from './gateway';

const app = express();

// Firebase initialization
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(credentials as any),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(responseHandler);

// Logger initialization
app.use(morgan('tiny'));

// Initialize gateway and services
Gateway.initGateway(app);

app.listen(process.env.PORT, async () => {
  await connectMongo();
  console.log(`Server running at ${process.env.PORT}`);
});
