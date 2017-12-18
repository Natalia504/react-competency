require("dotenv").config();
const express = require("express"),
    bodyParser = require("body-parser"),
    massive = require("massive"),
    app = express(),
    controller = require ('./../controllers/item_controller.js'),
    PORT = 8080;

app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then((db) => {
    console.log('db is connected');
    app.set('db', db);
});





app.get('/api/allItems', controller.getItems);
app.put('/api/editItem/:id', controller.editItem);
app.post('/api/addItem', controller.addItem);
app.delete('/api/deleteItem/:id', controller.deleteItem);





app.listen(PORT, () => (console.log(`Listening on port ${PORT}`)));