const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());



const todos_routes = require("./routes/todos_routes");

app.use(cors('http://localhost:8000'));

app.get('/', (req, res) => {
    res.send('Welcome to the TODO LIST API');
})

app.use("/todos",todos_routes);

app.listen(port, () => {
    console.log(`TP Todo List API listening at http://localhost:${port}`);
})