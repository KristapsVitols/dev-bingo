const router = require('express').Router();

const participantController = require('../controllers/participant-controller');

router.get('/', participantController.getParticipants);

module.exports = router;