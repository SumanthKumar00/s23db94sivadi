const mongoose = require("mongoose");

const  dogSchema = mongoose.Schema({
    dog_name: {
        type:String,
        required:true,
        match:/^[a-zA-Z]+$/
    },
    
    dog_color: String, 

    dog_age: {
        type:Number,
        min:1,
        max:100
    }
})

module.exports = mongoose.model("dog",  dogSchema);
