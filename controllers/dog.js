var dog = require('../models/dog');
// List of all Costumes
exports.dog_list = function(req, res) {
res.send('NOT IMPLEMENTED: dog list');
};
// for a specific Costume.
exports.dog_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dog detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.dog_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: dog create POST');
};
// Handle Costume delete form on DELETE.
exports.dog_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dog delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dog_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dog update PUT' + req.params.id);
};

// List of all Costumes
exports.dog_list = async function(req, res) {
    try{
    thedog = await dog.find();
    res.send(thedog);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
