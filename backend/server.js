require('dotenv').config();
console.log('SERVICE ACCOUNT PATH:', process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
console.log('Using project:', process.env.PROJECT_ID);
const path = require('path');
const express = require('express');
const app = express();
const admin = require('firebase-admin');


const serviceAccount = require(path.join(__dirname, process.env.FIREBASE_SERVICE_ACCOUNT_KEY));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: process.env.PROJECT_ID
});

const db = admin.firestore();

app.get('/', (req, res) => {
  res.send('Hello from DPBL Backend! Firestore connected (hopefully).');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


app.get('/test-firestore', async (req, res) => {
    try {
      const docRef = await db.collection('testCollection').add({
        timestamp: new Date(),
        message: 'Firestore is working!'
      });
      return res.json({ success: true, docId: docRef.id });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });
  