var admin = require("firebase-admin");

var serviceAccount = require("./ServiceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const auth = admin.auth();

module.exports = {db, auth};