const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the backend service!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend service is running on port ${PORT}`);
});
