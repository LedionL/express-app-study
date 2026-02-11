import express from 'express';
import { connectDB } from './config/db.js';
import { Person } from './models/person.js';

const app = express();
const port = 3500;

await connectDB();

app.use(express.json());

app.get('/', (req, res) => {

  res.send('Hello World!');
});

app.post('/person', async (req, res) => {
    try {
    const { name, age, email } = req.body;
    const person = new Person({ name, age, email });
    await person.save();
    console.log('Person created:', person);
    res.send('Person created');
    } catch (error) {
        console.error('Error creating person:', error); }
});

app.put('/person', async (req, res) => {
    const { name, age, email } = req.body;

    const personData = await Person.findByIdAndUpdate(id, {age}, { new: true });

    console.log('Person found:', personData);

    res.send('Person updated');
});

app.delete('/person/:id', async (req, res) => {
    const { id } = req.params;
    await Person.findByIdAndDelete(id);
    res.send('Person deleted');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});