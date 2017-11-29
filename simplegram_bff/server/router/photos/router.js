const { Router } = require('express');

const controller = require('./controller');

const router = Router();

router.route('/:id').get(controller.getPhoto);

module.exports = router;
