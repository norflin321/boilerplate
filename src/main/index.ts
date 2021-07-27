import { DEV, PROD, ACTIVE } from '../constants';
import { startExpress } from '../utils/express';
import { firestoreGetAll } from '../utils/firestore';

startExpress();

const main = async () => {
  let db = await firestoreGetAll();
  if (!db) return;
  // console.log(db);
};

if (DEV) {
  main();
} else if (PROD && ACTIVE) {
  main();
}
