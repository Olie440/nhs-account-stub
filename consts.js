const ID_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJhY2NvdW50X2lkIjoiZGY4YWYxMWQtODk4MC00YTVlLThjY2MtYmE3NWI3NzcxMGJlIiwiY3VzdG9tOmFjY291bnRfaWQiOiJkZjhhZjExZC04OTgwLTRhNWUtOGNjYy1iYTc1Yjc3NzEwYmUiLCJpc3MiOiJodHRwczovL2F1dGguZGV2LnNpZ25pbi5uaHMudWsiLCJpYXQiOjE1ODM5MjA2MTksImV4cCI6MTg5MzQ1NjAwMCwiYXVkIjoiaHR0cHM6Ly9hdXRoLmRldi5zaWduaW4ubmhzLnVrIiwianRpIjoiMDM0ZjQ1M2ItOTZhOS00OThiLWI2ZTEtYzA4MGVkMGI4ZmRhIiwiYXV0aGVudGljYXRpb25fdmVjdG9yIjoiQ3AuQ2QiLCJyZW1lbWJlcl9teV9kZXZpY2UiOmZhbHNlLCJ1c2VyX2FnZW50IjoiQW1hem9uIENsb3VkRnJvbnQifQ.H_mqSUYEKHcGk62HgJ2mDKls9s9CKXUnAHrw9jlb4_U'

module.exports = {
  ID_TOKEN,

  LoginFlowTypes: {
    REGISTER: Symbol(),
    VALID_LOGIN: Symbol()
  },

  PYIFlowTypes: {
    AUTO: 'Auto1',
    MANUAL: 'Manual',
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
    V1_PYI: '#/patient-online/gp-connect',
    V2_PROVISIONING: '/provisioning/1234',
    V2_P5_UPLIFT: '/proofing/know-nhs-number'
  }
};
