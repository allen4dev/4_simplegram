const { Router } = require('express');

const main = require('./main/router');
const photos = require('./photos/router');
const users = require('./users/router');

const router = Router();

router.use('/', main);
router.use('/photos', photos);
router.use('/users', users);

module.exports = router;
