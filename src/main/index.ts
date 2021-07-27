import express from 'express';
import { DEV, PROD, ACTIVE } from '../constants';
import { firestoreGetAll } from '../utils/firestore';

const app = express();
app.use(express.json());
app.get('/ping', (_, res) => res.json('pong'));

const magic = async () => {
  let db = await firestoreGetAll();
  if (!db) return;
  console.log(db);
};

if (DEV) {
  magic();
} else if (PROD && ACTIVE) {
  magic();
}

app.listen(process.env.PORT || 5000);
