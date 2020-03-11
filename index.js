const express = require("express");
const cors = require("cors");
const app = express();

const FlowTypes = {
  auto: "Auto1",
  manual: "Manual"
};

// Port to run the stub on
const PORT = 4000;
// Flow to use
const FLOW_TYPE = FlowTypes.auto;
// Where to redirect to after login is successful
const SUCCESS_REDIRECT_URL = "http://localhost:4200/#/patient-online/gp-connect";
// This shouldn't need to change as it expires in 2030, it can be edited using https://jwt.io/
const ID_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJhY2NvdW50X2lkIjoiZGY4YWYxMWQtODk4MC00YTVlLThjY2MtYmE3NWI3NzcxMGJlIiwiY3VzdG9tOmFjY291bnRfaWQiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnNpZ25pbi5uaHMudWsiLCJpYXQiOjE1ODM5MjA2MTksImV4cCI6MTg5MzQ1NjAwMCwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5zaWduaW4ubmhzLnVrIiwianRpIjoiMDM0ZjQ1M2ItOTZhOS00OThiLWI2ZTEtYzA4MGVkMGI4ZmRhIiwiYXV0aGVudGljYXRpb25fdmVjdG9yIjoiQ3AuQ2QiLCJyZW1lbWJlcl9teV9kZXZpY2UiOmZhbHNlLCJ1c2VyX2FnZW50IjoiQW1hem9uIENsb3VkRnJvbnQifQ.H_mqSUYEKHcGk62HgJ2mDKls9s9CKXUnAHrw9jlb4_U";

app.post("/authenticate/password", (_, res) => {
  res.send({
    session_id: "b9f52f7b-16a3-4360-b29b-19ebf258107e",
    authentication_state: "UNREGISTERED"
  });
  res.end();
});

app.post("/account/mobile", (_, res) => {
  res.status(200);
  res.end();
});

app.post("/authenticate/otp", (_, res) => {
  res.send({
    id_token: ID_TOKEN
  });
  res.end();
});

app.post("/authcode", (_, res) => {
  res.send({
    Location: SUCCESS_REDIRECT_URL,
    id_token: ID_TOKEN
  });
  res.end();
});

app.get("/pyi/pol/:any/status", (_, res) => {
  res.send({
    status: "RequiresTriage"
  });
  res.end();
});

app.post("/pyi/initialisation/:any", (_, res) => {
  res.send({
    flowType: FLOW_TYPE,
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

app.get("/pyi/upload/url/:any/photo", (_, res) => {
  res.send({
    signed_url: `http://localhost:${PORT}/unsubmitted/1`,
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
    preflightCheckStatus: "fail",
    preflightCheckRejectReason: "document_blurred"
  });
  res.end();
});

app.post("/account-logger/logs", (_, res) => {
  res.status(200);
  res.end();
});

app.use(cors({ credentials: true, origin: true }));
app.listen(PORT, () => console.log("Stub Started on port", PORT));
