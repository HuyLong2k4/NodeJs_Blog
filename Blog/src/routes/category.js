var express = require('express');
var router = express.Router();
var categoryController = require('../app/controllers/CategorysController');

// tao đường đẫn đến trang chi tiết
router.get('/:name', categoryController.show);

module.exports = router;
