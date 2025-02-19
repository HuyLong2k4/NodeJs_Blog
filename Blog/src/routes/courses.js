var express = require('express');
var router = express.Router();
var coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.delete('/:id', coursesController.destroy);
router.patch('/:id/restore', coursesController.restore);
router.put('/:id', coursesController.update);
router.get('/:slug', coursesController.show);

module.exports = router;
