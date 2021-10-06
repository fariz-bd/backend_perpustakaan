const express = require('express');
const router = express.Router();
const controller = require('../controller/kategory');
// const middleware = require('../middleware/aud')

router.post('/add', controller.add);
router.get('/all', controller.all);
router.put('/edit:id', controller.edit);
router.delete('/delete:id', controller.delete);

module.exports = router;