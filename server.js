/**
 * Simple Express backend for ACE SMS proxy & mock auth
 * - Use .env to set ACESMS_API_KEY and JWT_SECRET
 * - Designed for quick deploy on Render via GitHub
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const auth = require('./routes/auth');
const acesms = require('./routes/acesms');
const admin = require('./routes/admin');

app.use('/api/auth', auth);
app.use('/api/acesms', acesms);
app.use('/api/admin', admin);

// health
app.get('/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server listening on port', port);
});
