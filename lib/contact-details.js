const { CONTACT_DETAILS_FLOW } = require('../config');
const {
  ContactDetailsFlowTypes: {
    NO_DETAILS,
    NO_PHONE,
    NO_EMAIL,
    BOTH_MISMATCHED,
    PHONE_MISMATCH,
    EMAIL_MISMATCH,
  },
} = require('../consts');

const TelcomOptions = new Map()
  .set(NO_DETAILS, {
    mobileNumber: ['+447700000001'],
    email: ['test@example.com'],
  })
  .set(NO_PHONE, {
    mobileNumber: ['+447700000001'],
    email: [],
  })
  .set(NO_EMAIL, {
    mobileNumber: [],
    email: ['test@example.com'],
  })
  .set(BOTH_MISMATCHED, {
    mobileNumber: ['+447700000001', '+447700000002'],
    email: ['test@example.com', 'test@nhs.uk'],
  })
  .set(PHONE_MISMATCH, {
    mobileNumber: ['+447700000001', '+447700000002'],
    email: [],
  })
  .set(EMAIL_MISMATCH, {
    mobileNumber: [],
    email: ['test@example.com', 'test@nhs.uk'],
  });

module.exports = function (app) {
  app.post('/contact-details/options', (_, res) => {
    res.send(TelcomOptions.get(CONTACT_DETAILS_FLOW));
    res.end();
  });

  app.post('/contact-details', (_, res) => {
    res.status(200);
    res.end();
  });
};
