const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const config = require('./config');
const addLoginRoutes = require('./lib/login');
const addPyiRoutes = require('./lib/pyi');

const { ID_TOKEN, NHS_COOKIE, FRONT_END_URL } = require('./config');

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

addLoginRoutes(app);
addPyiRoutes(app);

app.get('/', (_, res) => {
    res.cookie('id_token', ID_TOKEN);
    res.cookie('nhs-authorization-cookie', NHS_COOKIE);
    res.redirect(302, FRONT_END_URL);
});

app.listen(config.PORT, () => console.log('Stub Started on port', config.PORT));
