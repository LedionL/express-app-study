import express from 'express';

const app = express();
const port = 3500;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

  res.send('Hello World!');
});

app.post('/form', (req, res) => {
    console.log('Form data received:', req.body);
    res.send('Form submitted!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});