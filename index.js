const express = require("express");
const cors = require("cors");
const app = express();

const config = require('./config');
const addSpaLoginRoutes = require('./lib/spa-login');
const addModuleAccountRoutes = require('./lib/module-account');

app.use(cors({ credentials: true, origin: true }));

addSpaLoginRoutes(app);
addModuleAccountRoutes(app);

app.get("/pyi/pol/:any/status", (_, res) => {
  res.send({
    status: "RequiresTriage"
  });
  res.end();
});

app.post("/pyi/initialisation/:any", (_, res) => {
  res.send({
    flowType: config.FLOW_TYPE,
    initialisationOutcome: "StartPyi"
  });
  res.end();
});

app.get("/client-info", (_, res) => {
  res.send({
    client_id: "nhs-online",
    client_display_name: "NHS App",
    approved_scopes: [
      "openid",
      "profile",
      "nhs_app_credentials",
      "gp_integration_credentials",
      "phone",
      "email",
      "profile_extended"
    ],
    claims: [
      "sub",
      "birthdate",
      "family_name",
      "nhs_number",
      "im1_token",
      "gp_ods_code",
      "gp_user_id",
      "gp_linkage_key",
      "gp_integration_credentials",
      "phone_number",
      "phone_number_verified",
      "email",
      "email_verified",
      "given_name"
    ]
  });
  res.end();
});

app.get("/pyi/upload/url/:any/:photoType", (_, res) => {
  res.send({
    signed_url: `http://localhost:${config.PORT}/unsubmitted/1`,
    validation_id: "1"
  });
  res.end();
});

app.put("/unsubmitted/1", (_, res) => {
  res.status(200);
  res.end();
});

app.get("/pyi/upload/validation/:object_key", (_, res) => {
  res.send({
    validationStatus: "success",
    validationMessage: "",
    validationRejectReason: "",
    ...config.PREFLIGHT_CHECK_RESULT
  });
  res.end();
});

app.put("/pyi/verification/:any/document/submission", (_, res) => {
  res.send({
    error: null
  });
  res.end();
});

app.post("/account-logger/logs", (_, res) => {
  res.status(200);
  res.end();
});

app.listen(config.PORT, () => console.log("Stub Started on port", config.PORT));
