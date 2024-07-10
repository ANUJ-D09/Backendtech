Sure, here's the updated README file with code snippets for the CRUD operations you have implemented:

# Project README

## Day 1

### Learning Objectives:
- **HTTP Server Creation:** Learned how to create an HTTP server using Node.js.
- **Testing with Postman:** Successfully ran and tested server endpoints using Postman.

## Day 1.5

### Learning Objectives:
- **Introduction to Express:** Learned the basics of the Express framework.
- **Commands Used:**
  - `yarn init`: Initialized a new Node.js project.
  - `yarn add express`: Added Express as a dependency.
  - `yarn add -D nodemon`: Installed nodemon as a development dependency.
- **Updated `package.json`:**
  - Added `"type": "module"` to enable ES module syntax.
  - Updated scripts:
    - `"start": "node index.js"`: Script to start the server.
    - `"dev": "nodemon index.js"`: Script to run the server using nodemon for automatic reloading during development.

**Note:** If errors persist, try running the server script (`yarn dev`) 2-3 times to ensure dependencies are fully installed.

## CRUD Operations

### Code Snippets

```javascript
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let datas = [];
let nextId = 1;

// Create new data
app.post('/datas', (req, res) => {
    const { name, price } = req.body;
    const newData = { id: nextId++, name, price };
    datas.push(newData);
    res.status(201).send(newData);
});

// Fetch all data
app.get('/datas', (req, res) => {
    res.status(200).send(datas);
});

// Fetch data by ID
app.get('/datas/:id', (req, res) => {
    const data = datas.find(t => t.id === parseInt(req.params.id));
    if (!data) {
        return res.status(404).send('Data not found');
    }
    res.status(200).send(data);
});

// Update data by ID
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

// Delete data by ID
app.delete('/datas/:id', (req, res) => {
    const index = datas.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Data not found');
    }
    datas.splice(index, 1);
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

### Notes

- **Creating Data:**
  - **Endpoint:** `POST /datas`
  - **Request Body:**
    ```json
    {
        "name": "Example Name",
        "price": 100
    }
    ```
  - **Response:** Returns the newly created data object.

- **Fetching All Data:**
  - **Endpoint:** `GET /datas`
  - **Response:** Returns an array of all data objects.

- **Fetching Data by ID:**
  - **Endpoint:** `GET /datas/:id`
  - **Response:** Returns the data object with the specified ID or a 404 error if not found.

- **Updating Data by ID:**
  - **Endpoint:** `PUT /datas/:id`
  - **Request Body:**
    ```json
    {
        "name": "Updated Name",
        "price": 200
    }
    ```
  - **Response:** Returns the updated data object or a 404 error if not found.

- **Deleting Data by ID:**
  - **Endpoint:** `DELETE /datas/:id`
  - **Response:** Returns a 204 status code on successful deletion or a 404 error if not found.
