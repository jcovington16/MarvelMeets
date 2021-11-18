const {Event, validateEvent} = require('../models/event');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


//create an event
router.post('/:_id/events', async (req, res) => {
    try {
        const { error } = validateEvent(req.body);

        if(error) return res.status(400).send(`Error: ${error.details[0].message}`);

        const event = await new Event ({
            userId: req.params._id,
            title: req.body.title,
            topic: req.body.topic,
            city: req.body.city,
            address: req.body.address,
            event_date: req.body.event_date

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
        const event = await Event.findById(req.param._id)

        event.attendees += 1

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

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`)
    }
})

//search for event
router.get('/:_id/events', async (req, res) => {

})



//delete event only by original user who made the post
router.delete('/:_id/events', async(req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params._id);

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