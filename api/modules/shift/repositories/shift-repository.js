const Shift = require('../models/Shift');

exports.getLatestShift = () => Shift.findOne().sort({_id: -1});