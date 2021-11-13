const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true, minlength:4, maxlength:50},
    lastname: {type: String, required: true, minlength:4, maxlength:50},
    email: {type: String, unique: true, required: true, minlength:5, maxlength:50},
    username: {type: String, unique: true, required: true, minlength:5, maxlength:50},
    password: {type: String, required: true, maxlength: 1024, minlength: 5},
    city: {type: String, default:''},
    state: {type: String, default:''},
    favhero: {type: String, default:''},
    dateJoined: {type: Date, default: Date.now()}
})

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id: this._id, firstname: this.firstname, lastname: this.lastname, email: this.email}, config.get('jwtSecret'));
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        firstname: Joi.string().min(4).max(50).required(),
        lastname: Joi.string().min(4).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        username: Joi.string().min(5).max(50),
        password: Joi.string().min(5).max(1024).required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        favhero: Joi.string().required()   

    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;