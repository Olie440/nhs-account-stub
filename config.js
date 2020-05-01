const FlowTypes = {
  AUTO: "Auto1",
  MANUAL: "Manual",
};

const PreFlightResults = {
  SUCCESS: {
    preflightCheckStatus: "success",
    preflightCheckRejectReason: "",
  },
  BLURRED: {
    preflightCheckStatus: "fail",
    preflightCheckRejectReason: "document_blurred",
  },
  NO_DOCUMENT: {
    preflightCheckStatus: "fail",
    preflightCheckRejectReason: "no_document_found",
  },
};

const SubmissionResults = {
  GO_TO_AUTO: 'StartFaceScan',
  GO_TO_MANUAL: 'ReferredToManual',
  FAIL: null
}

const P5UpliftResponses = {
  SUCCESS: { status: 200, body: { message:"Uplift Successful" } },
  NO_MATCH: { status: 404, body: { error: "No match found" } },
  NOT_VERIFIED: { status: 404, body: { error: "NHS number not verified" }},
  MULTIPLE: { status: 404, body: { error: "Multiple matches found" }},
  OTHER: { status: 503, body: { error: "Internal server error" } }
};

module.exports = {
  // Port to run the stub on
  PORT: 4000,
  // Flow to use
  PYI_FLOW_TYPE: FlowTypes.AUTO,
  // Preflight flow to use
  PYI_PREFLIGHT_CHECK_RESULT: PreFlightResults.BLURRED,
  // Result of photo submission
  PYI_SUBMISSION_RESULT: SubmissionResults.GO_TO_AUTO,
  // P5 flow to use
  P5_UPLIFT_RESPONSE: P5UpliftResponses.NO_MATCH,
  // Where to redirect to after login is successful
  SUCCESS_REDIRECT_URL: "http://localhost:4200/#/patient-online/gp-connect",
  // This shouldn't need to change as it expires in 2030, it can be edited using https://jwt.io/
  ID_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJhY2NvdW50X2lkIjoiZGY4YWYxMWQtODk4MC00YTVlLThjY2MtYmE3NWI3NzcxMGJlIiwiY3VzdG9tOmFjY291bnRfaWQiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnNpZ25pbi5uaHMudWsiLCJpYXQiOjE1ODM5MjA2MTksImV4cCI6MTg5MzQ1NjAwMCwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5zaWduaW4ubmhzLnVrIiwianRpIjoiMDM0ZjQ1M2ItOTZhOS00OThiLWI2ZTEtYzA4MGVkMGI4ZmRhIiwiYXV0aGVudGljYXRpb25fdmVjdG9yIjoiQ3AuQ2QiLCJyZW1lbWJlcl9teV9kZXZpY2UiOmZhbHNlLCJ1c2VyX2FnZW50IjoiQW1hem9uIENsb3VkRnJvbnQifQ.H_mqSUYEKHcGk62HgJ2mDKls9s9CKXUnAHrw9jlb4_U"
};