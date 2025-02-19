var express = require('express');
var router = express.Router();
var clientsController = require('../app/controllers/ClientsController');

router.get('/stored/book', clientsController.storedBook);
router.get('/trash', clientsController.trash);

module.exports = router;
