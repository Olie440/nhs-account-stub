module.exports = {
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
  }
};
