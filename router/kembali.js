const express = require('express');
const router = express.Router();
const controller = require('../controller/kembali');
const middleware = require('../middleware/aud');

router.get('/all', controller.all);
router.post('/add:id',middleware.user, controller.add);

module.exports = router;