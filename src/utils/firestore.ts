import firebase from 'firebase';
import { firebaseConfig } from '@/constants';

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore().collection('db').doc('db');

export const firestoreGetAll = async () => {
  return firestore
    .get()
    .then(res => res.data())
    .catch(err => console.log('firestore get data err: ', err));
};
