const { Router } = require('express');
const { exampleController } = require('../controllers');
const { requestHandler } = require('../helpers');

const router = Router();

router
  .route('/api/example')
  .get(
    exampleController.list,
    requestHandler,
  )
  .post(
    exampleController.create,
    requestHandler,
  );

module.exports = router;
