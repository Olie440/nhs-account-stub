const { 
  LoginFlowTypes,
  PYIFlowTypes,
  ValidationResults,
  PreFlightResults,
  PreFlightEnabledStatuses,
  SubmissionResults,
  P5UpliftResponses
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
  LOGIN_FLOW: LoginFlowTypes.VALID_LOGIN,
  // PYI Flow to use
  PYI_FLOW_TYPE: PYIFlowTypes.AUTO,
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
  SUCCESS_REDIRECT_ROUTE: '#/patient-online/gp-connect',
  // This shouldn't need to change as it expires in 2030, it can be edited using https://jwt.io/
  ID_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJhY2NvdW50X2lkIjoiZGY4YWYxMWQtODk4MC00YTVlLThjY2MtYmE3NWI3NzcxMGJlIiwiY3VzdG9tOmFjY291bnRfaWQiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnNpZ25pbi5uaHMudWsiLCJpYXQiOjE1ODM5MjA2MTksImV4cCI6MTg5MzQ1NjAwMCwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5zaWduaW4ubmhzLnVrIiwianRpIjoiMDM0ZjQ1M2ItOTZhOS00OThiLWI2ZTEtYzA4MGVkMGI4ZmRhIiwiYXV0aGVudGljYXRpb25fdmVjdG9yIjoiQ3AuQ2QiLCJyZW1lbWJlcl9teV9kZXZpY2UiOmZhbHNlLCJ1c2VyX2FnZW50IjoiQW1hem9uIENsb3VkRnJvbnQifQ.H_mqSUYEKHcGk62HgJ2mDKls9s9CKXUnAHrw9jlb4_U',
  // Contents of nhs-authorization-cookie to be set, edit above
  NHS_COOKIE: JSON.stringify(OIDC_PARAMS),
};
