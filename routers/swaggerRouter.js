const swaggerUi = require('swagger-ui-express');
const specs = require('../config/swagger.js');

const router = require('express').Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router;