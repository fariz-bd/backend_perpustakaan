const controller = require('../controller/buku');
const express = require('express');
const router = express.Router();
const middleware = require('../middleware/aud')

router.get('/all', controller.all);
router.post('/add', middleware.admin, controller.add);
router.put('/edit:id', middleware.admin, controller.edit);
router.delete('/detele:id', middleware.admin, controller.delete);

module.exports = router;