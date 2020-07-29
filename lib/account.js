const { ACCOUNT_RECOVERY_FLOW } = require('../config');
const {
  AccountRecoveryFlows: {
    PHONE_NUMBER_NO_MATCH,
    NHS_NUMBER_NO_MATCH,
    P0_MATCH,
    P5_MATCH,
    CHANGE_PHONE_NUMBER_ERROR,
  },
} = require('../consts');

const UserProofingLevels = new Map()
  .set(PHONE_NUMBER_NO_MATCH, 0)
  .set(NHS_NUMBER_NO_MATCH, 5)
  .set(P0_MATCH, 0)
  .set(P5_MATCH, 5);

module.exports = function (app) {
  app.post('/account/mobile-verification', (_, res) => {
    if (ACCOUNT_RECOVERY_FLOW === PHONE_NUMBER_NO_MATCH) {
      res.status(400);
    } else {
      res.send({
        proofing_level: UserProofingLevels.get(ACCOUNT_RECOVERY_FLOW),
      });
    }
    res.end();
  });

  app.post('/account/confirm-nhsnumber', (_, res) => {
    res.status(ACCOUNT_RECOVERY_FLOW === NHS_NUMBER_NO_MATCH ? 400 : 200);
    res.end();
  });

  app.post('/account/change-phone-number', (_, res) => {
    if (ACCOUNT_RECOVERY_FLOW === CHANGE_PHONE_NUMBER_ERROR){
      res.status(500);
      res.send({
        error: 'Error Flow'
      });
    } else {
      res.send({
        transaction_id: '1e656ba6-c52e-4440-b3ff-5001d001fd8b'
      });
    }
  });
};
