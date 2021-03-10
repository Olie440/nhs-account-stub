const { VIDEO_VERIFICATION_FLOW } = require('../config');
const {
  VideoVerificationFlowTypes: { VAILD_RECORD, INVAILD_ID, MISSING_RECORD, TECHNICAL_ERROR },
} = require('../consts');

module.exports = function (app) {
  app.get('/identityverification/:any', (_, res) => {
    res.send({
      nhsNumber: null,
      firstName: 'John',
      middleNames: '',
      lastName: 'Smith',
      dateOfBirth: '1982-06-19',
      postCode: 'M22 9UD',
      challengeResponse: '2 7 9 4',
      photoURL: 'http://localhost:4000/assets/uk-driving-licence.jpg',
      photoURLBack: null,
      videoURL: 'http://localhost:4000/assets/video-selfie.mp4',
      likenessFrameURL: 'http://localhost:4000/assets/iproov-interface.png',
      verificationChecks: {
        likenessCheckPassed: false,
        docCheckPassed: false,
        pdsCheckPassed: false,
      },
      flowType: 'Manual',
      documentRejectionCode: null,
      useExternallyProvidedDemographicData: false,
      submittedDateUtc: '2021-02-01T18:03:08.403Z',
    });
    res.end();
  });

  app.get('/rejectreasons', (_, res) => {
    res.send([]);
  });

  app.put('/identityverification/:any/pdstrace', (_, res) => {
    res.send({
      nhsNumber: '2160351636',
      dateOfBirth: '1992-04-01T15:39:51.540Z',
      ODSCode: 'A10001',
      firstName: 'John',
      middleName: '',
      lastName: 'Smith',
      statusCode: 'SMSP-0000',
      isPatientDead: false,
    });
    res.end();
  });

  app.get('/transcodingverification/:any', (_, res) => {
    if (VIDEO_VERIFICATION_FLOW === VAILD_RECORD) {
      res.send({
        submittedTime: '2021-02-01T18:03:08.403Z',
        originalVideoUrl: 'http://localhost:4000/assets/video-selfie.webm',
        transcodedVideoUrl: 'http://localhost:4000/assets/video-selfie.mp4',
      });
    }

    if (VIDEO_VERIFICATION_FLOW === INVAILD_ID) {
      res.status(404);
      res.send({ 
        message: 'Verification record not found'
      });
    }

    if (VIDEO_VERIFICATION_FLOW === MISSING_RECORD) {
      res.status(404);
      res.send({
        message: 'Resource key for video is null or empty'
      })
    }

    if (VIDEO_VERIFICATION_FLOW === TECHNICAL_ERROR) {
      res.status(500);
    }

    res.end();
  });
};
