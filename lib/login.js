const { ID_TOKEN, SUCCESS_REDIRECT_ROUTE, P5_UPLIFT_RESPONSE, FRONT_END_URL } = require("../config");

module.exports = function (app) {
  app.post("/login/account-status", (_, res) => {
    res.send({
      status: "CONFIRMED",
    });
    res.end();
  });

  app.post("/login/password", (_, res) => {
    res.send({
      session_id: "b9f52f7b-16a3-4360-b29b-19ebf258107e",
      authentication_state: "UNREGISTERED",
    });
    res.end();
  });

  app.post("/login/register", (_, res) => {
    res.send({
      status: "ok",
    });
    res.end();
  });
  
  app.post("/login/mobile", (req, res) => {
    res.send({
      phone_number: "",
      session_id: "b9f52f7b-16a3-4360-b29b-19ebf258107e",
    });
    res.end();
  });

  app.post("/login/otp", (_, res) => {
    res.send({
      id_token: ID_TOKEN,
    });
    res.end();
  });

  app.post("/authcode", (_, res) => {
    res.send({
      Location: FRONT_END_URL + SUCCESS_REDIRECT_ROUTE,
      id_token: ID_TOKEN,
    });
    res.end();
  });

  app.post("/login/mid-level/p5-uplift-nhs-known", (_, res) => {
    res.status(P5_UPLIFT_RESPONSE.status);
    res.send(P5_UPLIFT_RESPONSE.body);
    res.end();
  });

  app.post("/login/mid-level/p5-uplift-demog-trace", (_, res) => {
    res.status(P5_UPLIFT_RESPONSE.status);
    res.send(P5_UPLIFT_RESPONSE.body);
    res.end();
  });
};
