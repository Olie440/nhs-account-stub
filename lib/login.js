const { LoginFlowTypes } = require('../consts');
const {
  LOGIN_FLOW,
  ID_TOKEN,
  SUCCESS_REDIRECT_ROUTE,
  P5_UPLIFT_RESPONSE,
  FRONT_END_URL,
} = require('../config');

const AccountStatuses = new Map()
  .set(LoginFlowTypes.REGISTER, 'NOT_FOUND')
  .set(LoginFlowTypes.VALID_LOGIN, 'CONFIRMED');

const AuthenticationStates = new Map()
  .set(LoginFlowTypes.REGISTER, 'UNREGISTERED')
  .set(LoginFlowTypes.VALID_LOGIN, 'VERIFIED');

module.exports = function (app) {
  app.post('/login/account-status', (_, res) => {
    res.send({
      status: AccountStatuses.get(LOGIN_FLOW),
    });
    res.end();
  });

  app.post('/login/password', (_, res) => {
    res.send({
      session_id: 'b9f52f7b-16a3-4360-b29b-19ebf258107e',
      authentication_state: AuthenticationStates.get(LOGIN_FLOW),
      phone_number: '+44 7700 900796'
    });
    res.end();
  });

  app.post('/login/register', (_, res) => {
    res.send({
      status: 'ok',
    });
    res.end();
  });

  app.post('/login/mobile', (req, res) => {
    res.send({
      phone_number: '+44 7700 900796',
      session_id: 'b9f52f7b-16a3-4360-b29b-19ebf258107e',
    });
    res.end();
  });

  app.post('/login/otp', (_, res) => {
    res.send({
      id_token: ID_TOKEN,
    });
    res.end();
  });

  app.post('/authcode', (_, res) => {
    res.send({
      Location: FRONT_END_URL + SUCCESS_REDIRECT_ROUTE,
      id_token: ID_TOKEN,
    });
    res.end();
  });

  app.post('/login/mid-level/p5-uplift-nhs-known', (_, res) => {
    res.status(P5_UPLIFT_RESPONSE.status);
    res.send(P5_UPLIFT_RESPONSE.body);
    res.end();
  });

  app.post('/login/mid-level/p5-uplift-demog-trace', (_, res) => {
    res.status(P5_UPLIFT_RESPONSE.status);
    res.send(P5_UPLIFT_RESPONSE.body);
    res.end();
  });
};
