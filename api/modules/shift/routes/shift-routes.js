const router = require('express').Router();

const shiftController = require('../controllers/shift-controller');

router.get('/', shiftController.getShifts);

module.exports = router;