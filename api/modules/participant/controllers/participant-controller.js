const participantService = require('../services/participant-service');

/**
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<*>}
 */
exports.getParticipants = async (req, res) => {
    try {
        const participants = await participantService.getParticipants();

        return res.json({success: true, participants});
    } catch (err) {
        return res.status(500).json({success: false, error: err.message});
    }
};
