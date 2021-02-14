const shiftService = require('../services/shift-service');

/**
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<*>}
 */
exports.getShifts = async (req, res) => {
    try {
        const shift = await shiftService.getLatestShift();

        return res.json({success: true, shift});
    } catch (err) {
        return res.status(500).json({success: false, error: err.message});
    }
};
