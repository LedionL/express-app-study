import express from 'express';

const app = express();
const port = 3500;

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/thing/:name/:id', (req, res) => {
  const { name, id } = req.params;
  if(!/^\d{5}$/.test(id)) {
    return res.status(400).json({ error: 'ID must be a 5-digit number' });
  }
  res.json({ name, id });
});

app.use((req, res) => {
  res.status(404).send('404. Your route cannot be found. lol.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});