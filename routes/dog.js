var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();
/* GET dogs */
router.get('/', dog_controlers.dog_view_all_Page );
//GET request for one dog.
router.get('/dogs/:id', dog_controlers.dog_detail);

module.exports = router;