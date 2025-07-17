require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env'),
});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const mode = process.env.NODE_ENV;

app.use(cors());
app.use(bodyParser.json());

// Serve frontend build
app.use(express.static(path.join(__dirname, '../dist')));

// JSON Formatter
app.post('/format-json', (req, res) => {
  try {
    const raw = req.body.json;
    const parsed = JSON.parse(raw);
    const pretty = JSON.stringify(parsed, null, 2);
    res.json({ success: true, formatted: pretty });
  } catch (e) {
    res.status(400).json({ success: false, error: 'Invalid JSON' });
  }
});

// Base64 Encode
app.post('/encode', (req, res) => {
  try {
    const text = req.body.text;
    const encoded = Buffer.from(text, 'utf-8').toString('base64');
    res.json({ success: true, result: encoded });
  } catch (e) {
    res.status(400).json({ success: false, error: 'Encoding failed' });
  }
});

// Base64 Decode
app.post('/decode', (req, res) => {
  try {
    const base64 = req.body.base64;
    const decoded = Buffer.from(base64, 'base64').toString('utf-8');
    res.json({ success: true, result: decoded });
  } catch (e) {
    res.status(400).json({ success: false, error: 'Decoding failed' });
  }
});

// Hi route
app.get('/hi', (req, res) => {
  res.send('hello');
});

// Fallback to index.html for SPA
if (mode !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
