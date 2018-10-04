const express = require('express');
const routes = require("./routes.js");
const bodyParser = require('body-parser')


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// init routes
routes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));