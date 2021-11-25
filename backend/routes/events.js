const {Event, validateEvent} = require('../models/event');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


//create an event
router.post('/:_id/events', async (req, res) => {
    try {
        const { error } = validateEvent(req.body);

        if(error) return res.status(400).send(`Error: ${error.details[0].message}`);

        const event = await new Event ({
            address: req.body.address,
            city: req.body.city,
            description: req.body.description,
            event_date: req.body.event_date,
            title: req.body.title,
            topic: req.body.topic,
            userId: req.params._id,
            user_list: req.params.user_list

        });

        await event.save();
        return res.send(event);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

//register for event
router.put('/:_id/register', async (req, res) => {
    try{
        const event = await Event.findById(req.body._id)
        const user = await User.findById(req.params._id)

        if(user._id === event.userId) {
            return res.send('You can register for your own event');
        }

        if(event.user_list.includes(user._id)) {
            return res.send('User is already registered to Event')
        } else {
            event.attendees += 1
            event.user_list.push(user._id)
        }

        await event.save();
        return res.send(event);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
})


//grab all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();

        if(!events) {
            return res.status(400).send('No Events')
        } else {
            return res.send(events)
        }

    } catch (err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
    }
})

//search for event
router.get('/:_id/event', async (req, res) => {
    try {
        const event = await Event.findById(req.params._id);

        if(!event) {
            return res.status(404).send('Event not found');
        } else {
            return res.send(event)
        }
    } catch (err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
    }
})



//delete event only by original user who made the post
router.delete('/', async(req, res) => {
    try {
        const event = await Event.findOneAndDelete(req.body._id);

        if(!event) {
            return res.status(400).send('No Events to delete');
        } else{ 
            return res.send('Successfully Deleted!')
        }

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
})



module.exports = router;