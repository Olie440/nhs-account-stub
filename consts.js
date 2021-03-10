const ID_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJhY2NvdW50X2lkIjoiZGY4YWYxMWQtODk4MC00YTVlLThjY2MtYmE3NWI3NzcxMGJlIiwiY3VzdG9tOmFjY291bnRfaWQiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnNpZ25pbi5uaHMudWsiLCJpYXQiOjE1ODM5MjA2MTksImV4cCI6MTg5MzQ1NjAwMCwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5zaWduaW4ubmhzLnVrIiwianRpIjoiMDM0ZjQ1M2ItOTZhOS00OThiLWI2ZTEtYzA4MGVkMGI4ZmRhIiwiYXV0aGVudGljYXRpb25fdmVjdG9yIjoiQ3AuQ2QiLCJyZW1lbWJlcl9teV9kZXZpY2UiOmZhbHNlLCJ1c2VyX2FnZW50IjoiQW1hem9uIENsb3VkRnJvbnQifQ.H_mqSUYEKHcGk62HgJ2mDKls9s9CKXUnAHrw9jlb4_U'
const ID_CHECKER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJhY2NvdW50X2lkIjoiZGY4YWYxMWQtODk4MC00YTVlLThjY2MtYmE3NWI3NzcxMGJlIiwiY3VzdG9tOmFjY291bnRfaWQiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnNpZ25pbi5uaHMudWsiLCJpYXQiOjE1ODM5MjA2MTksImV4cCI6MTg5MzQ1NjAwMCwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5zaWduaW4ubmhzLnVrIiwianRpIjoiMDM0ZjQ1M2ItOTZhOS00OThiLWI2ZTEtYzA4MGVkMGI4ZmRhIiwiYXV0aGVudGljYXRpb25fdmVjdG9yIjoiQ3AuQ2QiLCJyZW1lbWJlcl9teV9kZXZpY2UiOmZhbHNlLCJ1c2VyX2FnZW50IjoiQW1hem9uIENsb3VkRnJvbnQiLCJjb2duaXRvOmdyb3VwcyI6WyJpZGVudGl0eS1jaGVja2VyIl19.9PJlSNgFN90nD0zYdHe6RJciiv_Zh8S7fKANsylRb1E';

module.exports = {
  ID_TOKEN,
  ID_CHECKER_TOKEN,

  LoginFlowTypes: {
    REGISTER: Symbol(),
    VALID_LOGIN: Symbol()
  },

  PyiFlowTypes: {
    AUTO: Symbol(),
    MANUAL: Symbol(),
  },

  ContactDetailsFlowTypes: {
    NO_DETAILS: Symbol(),
    NO_PHONE: Symbol(),
    NO_EMAIL: Symbol(),
    BOTH_MISMATCHED: Symbol(),
    PHONE_MISMATCH: Symbol(),
    EMAIL_MISMATCH: Symbol(),
  },

  AccountRecoveryFlows: {
    PHONE_NUMBER_NO_MATCH: Symbol(),
    NHS_NUMBER_NO_MATCH: Symbol(),
    CHANGE_PHONE_NUMBER_ERROR: Symbol(),
    P0_MATCH: Symbol(),
    P5_MATCH: Symbol()
  },

  VideoVerificationFlowTypes: {
    VAILD_RECORD: Symbol(),
    INVAILD_ID: Symbol(),
    MISSING_RECORD: Symbol(),
    TECHNICAL_ERROR: Symbol()
  },

  ValidationResults: {
    SUCCESS: {
      validationStatus: 'success',
      validationRejectReason: '',
    },
    INVALID: {
      validationStatus: 'fail',
      validationRejectReason: 'file_validation',
    },
    DAMAGED: {
      validationStatus: 'fail',
      validationRejectReason: 'file_damaged',
    },
  },

  PreFlightResults: {
    SUCCESS: {
      preflightCheckStatus: 'success',
      preflightCheckRejectReason: '',
    },
    BLURRED: {
      preflightCheckStatus: 'fail',
      preflightCheckRejectReason: 'document_blurred',
    },
    NO_DOCUMENT: {
      preflightCheckStatus: 'fail',
      preflightCheckRejectReason: 'no_document_found',
    },
    PENDING: {
      preflightCheckStatus: '',
      preflightCheckRejectReason: '',
    },
  },

  PreFlightEnabledStatuses: {
    ON: 'on',
    PROCESS_ONLY: 'process-only',
    OFF: 'off',
  },

  SubmissionResults: {
    GO_TO_AUTO: 'StartFaceScan',
    GO_TO_MANUAL: 'ReferredToManual',
    FAIL: null,
  },

  P5UpliftResponses: {
    SUCCESS: { status: 200, body: { message: 'Uplift Successful' } },
    NO_MATCH: { status: 404, body: { error: 'No match found' } },
    NOT_VERIFIED: { status: 404, body: { error: 'NHS number not verified' } },
    MULTIPLE: { status: 404, body: { error: 'Multiple matches found' } },
    OTHER: { status: 503, body: { error: 'Internal server error' } },
  },

  OTPResponses: {
    SUCCESS: { status: 200, body: { id_token: ID_TOKEN, remember_my_device: false } },
    INVALID: { status: 400, body: { error: 'Invalid OTP' } },
    EXPIRED: { status: 400, body: { error: 'OTP has expired'} },
    ATTEMPTS_EXCEEDED: { status: 400, body: { error: 'OTP attempts exceeded' } },
    OTHER: { status: 503, body: { error: 'Internal server error' } },
  },

  SuccessRoutes: {
    V1_PYI: '#/prove-your-identity',
    V2_PROVISIONING: '/provisioning/1234',
    V2_P5_UPLIFT: '/proofing/know-nhs-number'
  },

  StartRoutes : {
    SPA_LOGIN: '',
    GP_CONNECT: 'http://192.168.0.36:4200/#/patient-online/gp-connect',
    ID_CHECKER_MAIN: 'http://localhost:4200/#/id-checker/id-check/1234',
    ID_CHECKER_VIDEO_VERIFICATION: 'http://localhost:4200/#/id-checker/video-transcoding-verification/1234'
  }
};
