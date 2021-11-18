const mongoose = require('mongoose');
const Joi = require('joi');


const eventSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    title: {type: String, required: true, minlength: 4, maxlength:100},
    topic: {type: String, required: false, minlength:4, maxlength: 100},
    description: {type: String, required: false, minlength:10, maxlength: 250},
    city: {type: String},
    address: {type: String},
    attendees: {type: Number, default: 0},
    event_date: {type: Date},
    created: {type: Date, default: Date.now()}
    
})

const Event = mongoose.model('Event', eventSchema);

function validateEvent(event) {
    const Schema = Joi.object({
        title: Joi.string().required().min(4).max(100),
        topic: Joi.string().required().min(4).max(100),
        city: Joi.string().required(),
        address: Joi.string().required(),
        event_date: Joi.date()
    });
    return Schema.validate(event)

};

exports.Event = Event;
exports.eventSchema = eventSchema;
exports.validateEvent = validateEvent;