const Express = require('express');
const router = Express.Router();
const controller = require('../controller/user');

router.post('/add', controller.add);
router.get('/all', controller.all);
router.put('/edit:id', controller.edit);
router.delete('/delete:id', controller.delete);

module.exports = router;