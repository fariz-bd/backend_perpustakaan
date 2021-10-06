const controller = require('../controller/pinjam');
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/aud');


router.post('/add', middleware.user , controller.add);
router.get('/all', controller.all);
router.get('/name', middleware.user, controller.name);

module.exports = router;