const mongoose = require('mongoose');

const fromSchema  = mongoose.Schema({
    
        name : {
            type : String,
            required : true,
        },

        phone : {
            type : Number,
            required : true,
        }
        ,
        email : {
            type : String,
            required : true,
        },
        country : {
            type : String,
            required : true,
        },
        state : {
            type : String ,
            required : true,
        },

} , {timestamps : true})

const Form = mongoose.model("Form" , fromSchema);

module.exports = Form;