const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.send('OK'));
app.get('/api/data', (req, res) => res.json({ message: "Authenticated!" }));

app.listen(3000, () => console.log('API running on port 3000'));