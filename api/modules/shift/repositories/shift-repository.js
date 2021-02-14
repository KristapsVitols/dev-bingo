const Shift = require('../models/Shift');

exports.getShifts = () => Shift.find();