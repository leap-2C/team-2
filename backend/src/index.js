const express = require('express');
const { Sequelize } = require('sequelize');
const donationModel = require('./models/donation');


const sequelize = new Sequelize('your_db_name', 'your_db_user', 'your_db_password', {
  host: 'localhost',
  dialect: 'postgres',
});

const Donation = donationModel(sequelize);

const app = express();
app.use(express.json());

// Sync the model
sequelize.sync().then(() => console.log("Database synced!"));

// POST endpoint to create a donation
app.post('/donations', async (req, res) => {
  try {
    const donation = await Donation.create(req.body);
    res.status(201).json(donation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all donations
app.get('/donations', async (req, res) => {
  try {
    const donations = await Donation.findAll();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
