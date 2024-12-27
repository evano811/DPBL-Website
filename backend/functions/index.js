const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");

// Initialize Firebase Admin
admin.initializeApp();
// const db = admin.firestore();

// Create an Express app
const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello from Firebase!");
});

// Export the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
