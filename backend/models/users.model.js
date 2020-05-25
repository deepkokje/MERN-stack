const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
        username:{
            type: String,
            required: true,
            trim:true,
            minlength:3,
            unique: true,
            
        },
    },{
        timestamps:true,
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model('User',userSchema);

module.exports = User;