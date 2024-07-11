import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let datas = [];
let nextId = 1;

app.post('/datas', (req, res) => {
    const { name, price } = req.body;
    const newData = { id: nextId++, name, price };
    datas.push(newData);
    res.status(201).send(newData);
});

app.get('/datas', (req, res) => {
    res.status(200).send(datas);
});

app.get('/datas/:id', (req, res) => {
    const data = datas.find(t => t.id === parseInt(req.params.id));
    if (!data) {
        return res.status(404).send('Data not found');
    }
    res.status(200).send(data);
});

app.put('/datas/:id', (req, res) => {
    const data = datas.find(t => t.id === parseInt(req.params.id));
    if (!data) {
        return res.status(404).send('Data not found');
    }
    const { name, price } = req.body;
    data.name = name;
    data.price = price;
    res.status(200).send(data);
});

app.delete('/datas/:id', (req, res) => {
    const index = datas.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Data not found');
    }
    datas.splice(index, 1);
    res.status(204).send();
});
app.delete('/datas/:id', (req, res) => {
    const index = datas.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Data not found');
    }
    datas.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});