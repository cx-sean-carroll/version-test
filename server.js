// server.js (ES Module syntax)
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from version v1.1.0');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
