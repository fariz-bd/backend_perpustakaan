const express = require('express');
const router = express.Router();
const controller = require('../controller/login');

router.post('/admin', controller.admin);
router.post('/user', controller.user);

module.exports = router;