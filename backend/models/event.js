const mongoose = require('mongoose');
const Joi = require('joi');


const eventSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    title: {type: String, required: true, minlength: 4, maxlength:100},
    topic: {type: String, required: false, minlength:4, maxlength: 100},
    description: {type: String, required: false, minlength:10, maxlength: 250},
    city: {type: String},
    state:{type: String},
    address: {type: String},
    attendees: {type: Number, default: 0},
    event_date: {type: Date},
    created: {type: Date, default: Date.now()},
    user_list: {type: [], default: []},
    lng: {type: String, required: false},
    lat: {type: String, required: false}
    
})

const Event = mongoose.model('Event', eventSchema);

function validateEvent(event) {
    const Schema = Joi.object({
        address: Joi.string().required(),
        city: Joi.string().required(),
        description: Joi.string(),
        event_date: Joi.date(),
        state: Joi.string().required(),
        title: Joi.string().required().min(4).max(100),
        topic: Joi.string().required().min(4).max(100),
        
    });
    return Schema.validate(event)

};

exports.Event = Event;
exports.eventSchema = eventSchema;
exports.validateEvent = validateEvent;