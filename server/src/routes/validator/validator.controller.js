const { schemas } = require('../../models/schemas.model');
function getAllSchemas(req, res) {
    return res.status(200).json(schemas);
}

module.exports = {
    getAllSchemas,
}