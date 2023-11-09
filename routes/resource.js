var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dog_controller = require('../controllers/dog');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/dog', dog_controller.dog_create_post);
// DELETE request to delete Costume.
router.delete('/dog/:id', dog_controller.dog_delete);
// PUT request to update Costume.
router.put('/dog/:id', dog_controller.dog_update_put);
// GET request for one Costume.
router.get('/dog/:id', dog_controller.dog_detail);
// GET request for list of all Costume items.
router.get('/dog', dog_controller.dog_list);
module.exports = router;

