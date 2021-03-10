const {
  PORT,
  PYI_PREFLIGHT_CHECK_RESULT,
  PYI_FLOW_TYPE,
  PYI_SUBMISSION_RESULT,
  PYI_VALIDATION_RESULT,
  PYI_PREFLIGHT_CHECK_ENABLED,
} = require('../config');
const {
  PyiFlowTypes: { AUTO, MANUAL },
} = require('../consts');

const PyiFlowTypeValues = new Map()
  .set(AUTO, 'Auto1')
  .set(MANUAL, 'Manual');

module.exports = function (app) {
  app.get('/pol/:any/status', (_, res) => {
    res.send({
      status: 'RequiresTriage',
    });
    res.end();
  });

  app.post('/initialisation/:any', (_, res) => {
    res.send({
      flowType: PyiFlowTypeValues.get(PYI_FLOW_TYPE),
      initialisationOutcome: 'StartPyi',
    });
    res.end();
  });

  app.get('/client-info', (_, res) => {
    res.send({
      client_id: 'stub',
      client_display_name: 'NHS Login Stub',
      approved_scopes: [
        'openid',
        'profile',
        'nhs_app_credentials',
        'gp_integration_credentials',
        'phone',
        'email',
        'profile_extended',
      ],
      claims: [
        'sub',
        'birthdate',
        'family_name',
        'nhs_number',
        'im1_token',
        'gp_ods_code',
        'gp_user_id',
        'gp_linkage_key',
        'gp_integration_credentials',
        'phone_number',
        'phone_number_verified',
        'email',
        'email_verified',
        'given_name',
      ],
    });
    res.end();
  });

  app.get('/upload/url/:any/:type', (req, res) => {
    res.send({
      signed_url: `http://localhost:${PORT}/s3/cid-mock-pyi-verification-evidence-bucket/unsubmitted/df8af11d-8980-4a5e-8ccc-ba75b77710be/1234_${req.params.type}`,
      validation_id: 'validation_id_5678',
    });
    res.end();
  });

  app.put('/s3/cid-mock-pyi-verification-evidence-bucket/unsubmitted/:account_id/:object_key', (_, res) => {
    res.status(200);
    res.end();
  });

  app.get('/upload/validation/:object_key', (_, res) => {
    res.send({
      ...PYI_VALIDATION_RESULT,
      ...PYI_PREFLIGHT_CHECK_RESULT,
      preflightCheckEnabled: PYI_PREFLIGHT_CHECK_ENABLED,
    });
    res.end();
  });

  app.put('/verification/:any/document/submission', (_, res) => {
    res.send({
      outcome: PYI_SUBMISSION_RESULT,
    });
    res.end();
  });

  app.post('/verification/:account_id/flow/transition', (_, res) => {
    res.send({
      flowType: PyiFlowTypeValues.get(MANUAL)
    });
    res.end();
  });

  app.post('/verification/:account_id/challenge-response', (_, res) => {
    res.send({
      challenge: '4321'
    });
    res.end();
  });

  app.post('/account-logger/logs', (_, res) => {
    res.status(200);
    res.end();
  });

  app.get('/verification/:any/likeness/token', (_, res) => {
    res.send({
      verificationToken: '1234'
    });
    res.end();
  });
};
