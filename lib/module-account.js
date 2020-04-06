const { ID_TOKEN, SUCCESS_REDIRECT_URL } = require('../config');

module.exports = function (app) {
  app.post("/module-account/authenticate/password", (_, res) => {
    res.send({
      session_id: "b9f52f7b-16a3-4360-b29b-19ebf258107e",
      authentication_state: "UNREGISTERED",
    });
    res.end();
  });
  app.post("/module-account/account/mobile", (_, res) => {
    res.status(200);
    res.end();
  });

  app.post("/module-account/authenticate/otp", (_, res) => {
    res.send({
      id_token: ID_TOKEN,
    });
    res.end();
  });

  app.post("/module-account/authcode", (_, res) => {
    res.send({
      Location: SUCCESS_REDIRECT_URL,
      id_token: ID_TOKEN,
    });
    res.end();
  });
};
