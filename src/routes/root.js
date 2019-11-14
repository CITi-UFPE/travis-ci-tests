const { Router } = require('express');
const { requestHandler } = require('../helpers');

const router = Router();

/**
 * @swagger
 *
 * /api:
 *  get:
 *    description: This should return the list of avaliable endpoints
 *    tags:
 *      - Root
 */
router.get('/api', (req, res, next) => {
  const baseUrl = `${req.protocol}://${req.hostname}:${process.env.PORT || 3000}`;
  res.locals.data = [
    `${baseUrl}/api-docs`,
  ];

  res.locals.code = 200;

  next();
}, requestHandler);

module.exports = router;
