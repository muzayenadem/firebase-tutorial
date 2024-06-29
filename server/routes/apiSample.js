// backend/routes/api.js
const express = require('express');
const router = express.Router();
const { db } = require('../config/firebaseAdmin');
const checkAuth = require('../middleware/auth'); // Import auth middleware

// Example route to get data
router.get('/data', checkAuth, async (req, res) => {
  try {
    const snapshot = await db.collection('yourCollection').get();
    let data = [];
    snapshot.forEach(doc => {
      data.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error getting data', error });
  }
});
// Example route to add data
router.post('/data', async (req, res) => {
  try {
    const newData = req.body;
    const docRef = await db.collection('users').add(newData);
    res.status(200).json({ message: 'Data added successfully', id: docRef.id });
    console.log(docRef)
  } catch (error) {
    
    res.status(500).json({ message: 'Error adding data', error });
    console.log(error.message)
  }
});

module.exports = router;
