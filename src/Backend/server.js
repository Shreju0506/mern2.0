const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');

require('dotenv').config();

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/stores', storeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
