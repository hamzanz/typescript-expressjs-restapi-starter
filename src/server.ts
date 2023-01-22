import express from 'express';

const app = express();

const port = process.env.PORT || 3300;

app.get('/', (req, res) => {
  res.send('Sample app running.');
});

app.listen(port, () => {
  console.log(`Sample app listening on port ${port}`);
});
