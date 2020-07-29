const {
  ID_TOKEN,
  LoginFlowTypes,
  PyiFlowTypes,
  AccountRecoveryFlows,
  ValidationResults,
  PreFlightResults,
  PreFlightEnabledStatuses,
  SubmissionResults,
  P5UpliftResponses,
  OTPResponses,
  SuccessRoutes,
} = require('./consts.js');

const OIDC_PARAMS = {
  scope: 'openid profile nhs_app_credentials gp_integration_credentials phone email profile_extended',
  response_type: 'code',
  client_id: 'stub',
  redirect_uri: 'http://localhost:3000/auth-return',
  session_id: 'db3abe87-57f6-4c60-962f-67ea0d9f27ed',
  state: 'appstate',
  nonce: 'randomnonce',
  remember_my_device: false,
  vtr: '["Cp.Cd","Cp.Ck","Cm"]',
};

module.exports = {
  // Port to run the stub on
  PORT: 4000,
  // Address of the local front-end
  FRONT_END_URL: 'http://localhost:4200/',
  // Login Flow to use
  LOGIN_FLOW: LoginFlowTypes.REGISTER,
  // Global OTP check response
  OTP_RESPONSE: OTPResponses.SUCCESS,
  // Account Recovery Flow
  ACCOUNT_RECOVERY_FLOW: AccountRecoveryFlows.P0_MATCH,
  // PYI Flow to use
  PYI_FLOW_TYPE: PyiFlowTypes.AUTO,
  // Photo validation result to use
  PYI_VALIDATION_RESULT: ValidationResults.SUCCESS,
  // Preflight checks enabled
  PYI_PREFLIGHT_CHECK_ENABLED: PreFlightEnabledStatuses.ON,
  // Preflight flow to use
  PYI_PREFLIGHT_CHECK_RESULT: PreFlightResults.BLURRED,
  // Result of photo submission
  PYI_SUBMISSION_RESULT: SubmissionResults.GO_TO_AUTO,
  // P5 flow to use
  P5_UPLIFT_RESPONSE: P5UpliftResponses.NO_MATCH,
  // Where to redirect to after login is successful
  SUCCESS_REDIRECT_ROUTE: SuccessRoutes.V2_PROVISIONING,
  // This shouldn't need to change as it expires in 2030, it can be edited using https://jwt.io/
  ID_TOKEN,
  // Contents of nhs-authorization-cookie to be set, edit above
  NHS_COOKIE: JSON.stringify(OIDC_PARAMS),
};
