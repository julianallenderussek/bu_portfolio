const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const newsletterController = require('../controllers/newsletterController');


//router.get('/contacts', dataController.getData);
router.post('/contacts', contactController.createContact);
router.post('/newsletter', newsletterController.signUpNewsletter);

module.exports = router;
