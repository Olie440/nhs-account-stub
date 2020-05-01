const express = require("express");
const cors = require("cors");
const app = express();

const config = require('./config');
const addLoginRoutes = require('./lib/login');
const addPyiRoutes = require('./lib/pyi');

app.use(cors({ credentials: true, origin: true }));

addLoginRoutes(app);
addPyiRoutes(app);

app.listen(config.PORT, () => console.log("Stub Started on port", config.PORT));
