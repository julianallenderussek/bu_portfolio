const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/contacts', dataController.getData);
router.post('/contacts', dataController.createData);

module.exports = router;
