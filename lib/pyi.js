const { PORT, PYI_PREFLIGHT_CHECK_RESULT, PYI_FLOW_TYPE, PYI_SUBMISSION_RESULT, PYI_VALIDATION_RESULT, PYI_PREFLIGHT_CHECK_ENABLED } = require("../config");
const { PyiFlowTypes } = require("../consts");

const PyiFlowTypeValues = new Map()
  .set(PyiFlowTypes.AUTO, 'Auto1')
  .set(PyiFlowTypes.MANUAL, 'Manual');

module.exports = function (app) {
  app.get("/pol/:any/status", (_, res) => {
    res.send({
      status: "RequiresTriage",
    });
    res.end();
  });

  app.post("/initialisation/:any", (_, res) => {
    res.send({
      flowType: PyiFlowTypeValues.get(PYI_FLOW_TYPE),
      initialisationOutcome: "StartPyi",
    });
    res.end();
  });

  app.get("/client-info", (_, res) => {
    res.send({
      client_id: "stub",
      client_display_name: "NHS Login Stub",
      approved_scopes: [
        "openid",
        "profile",
        "nhs_app_credentials",
        "gp_integration_credentials",
        "phone",
        "email",
        "profile_extended",
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
        "given_name",
      ],
    });
    res.end();
  });

  app.get("/upload/url/:any/:photoType", (_, res) => {
    res.send({
      signed_url: `http://localhost:${PORT}/unsubmitted/1`,
      validation_id: "1",
    });
    res.end();
  });

  app.put("/unsubmitted/1", (_, res) => {
    res.status(200);
    res.end();
  });

  app.get("/upload/validation/:object_key", (_, res) => {
    res.send({
      ...PYI_VALIDATION_RESULT,
      ...PYI_PREFLIGHT_CHECK_RESULT,
      preflightCheckEnabled: PYI_PREFLIGHT_CHECK_ENABLED
    });
    res.end();
  });

  app.put("/verification/:any/document/submission", (_, res) => {
    res.send({
      outcome: PYI_SUBMISSION_RESULT
    });
    res.end();
  });

  app.post("/account-logger/logs", (_, res) => {
    res.status(200);
    res.end();
  });
};
