const shiftService = require('../services/shift-service');

/**
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<*>}
 */
exports.getShifts = async (req, res) => {
    try {
        const shifts = await shiftService.getShifts();

        return res.json({success: true, shifts});
    } catch (err) {
        return res.status(500).json({success: false, error: err.message});
    }
};
