const mongoose = require("mongoose");

const  dogSchema = mongoose.Schema({
    dog_name: String,
    
    dog_color: String, 

    dog_age: Number
})

module.exports = mongoose.model("dog",  dogSchema);
