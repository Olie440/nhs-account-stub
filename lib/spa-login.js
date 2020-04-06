const { ID_TOKEN, SUCCESS_REDIRECT_URL } = require("../config");

module.exports = function (app) {
  app.post("/spa-login/account-status", (_, res) => {
    res.send({
      status: "NOT_FOUND",
    });
    res.end();
  });

  app.post("/spa-login/register", (_, res) => {
    res.send({
      status: "ok",
    });
    res.end();
  });
  
  app.post("/spa-login/mobile", (req, res) => {
    res.send({
      phone_number: "",
      session_id: "b9f52f7b-16a3-4360-b29b-19ebf258107e",
    });
    res.end();
  });

  app.post("/spa-login/otp", (_, res) => {
    res.send({
      id_token: ID_TOKEN,
    });
    res.end();
  });

  app.post("/spa-login/authcode", (_, res) => {
    res.send({
      Location: SUCCESS_REDIRECT_URL,
      id_token: ID_TOKEN,
    });
    res.end();
  });
};
