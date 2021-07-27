import express from 'express';
import { firestoreGetAll } from '../utils/firestore';

const app = express();
app.use(express.json());
app.get('/ping', (_, res) => res.json('pong'));

const magic = async () => {
  let db = await firestoreGetAll();
  if (!db) return;
  console.log(db);
};

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isActive = process.env.ACTIVE;
if (isDev) {
  magic();
} else if (isProd && isActive) {
  magic();
}

app.listen(process.env.PORT || 5000);
