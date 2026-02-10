import express from 'express';
import multer from 'multer';
import { storage } from './config/multer.js';

const app = express();
const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } });
const port = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(upload.single('image')); 

app.get('/', (req, res) => {

  res.send('Hello World!');
});

app.post('/form', (req, res) => {
    console.log('Form data received:', req.body);
    console.log('Uploaded file:', req.file);
    res.send('Form submitted!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});