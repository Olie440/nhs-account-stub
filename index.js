const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();



const config = require('./config');
const addLoginRoutes = require('./lib/login');
const addPyiRoutes = require('./lib/pyi');
const addAccountRoutes = require('./lib/account');
const addContactDetailsRoutes = require('./lib/contact-details');
const addIdCheckerRoutes = require('./lib/id-checker');

const { ID_TOKEN, NHS_COOKIE, FRONT_END_URL, ID_CHECKER_TOKEN } = require('./config');

app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use('/assets', express.static('assets'));

addLoginRoutes(app);
addPyiRoutes(app);
addAccountRoutes(app);
addContactDetailsRoutes(app);
addIdCheckerRoutes(app);

app.get('/', (_, res) => {
    res.cookie('id_token', ID_TOKEN);
    res.cookie('nhs-authorization-cookie', NHS_COOKIE);
    res.cookie('id_checker_token', ID_CHECKER_TOKEN);
    res.redirect(302, FRONT_END_URL);
});

app.listen(config.PORT, () => console.log('Stub Started on port', config.PORT));
