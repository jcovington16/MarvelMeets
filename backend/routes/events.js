const {Event, validateEvent} = require('../models/event');
const {User} = require('../models/user');
const config = require('config')
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const twilio_account = config.get('twilio_account')
const twilio_auth = config.get('twilio_auth')
const twilio = require('twilio')
const client = new twilio(twilio_account, twilio_auth)
const mapbox = config.get('mapBoxToken')
const axios = require('axios')



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
            state: req.body.state,
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

//get lng/lat from event city/address
router.get('/location/:_id', async (req, res) => {
    try {
        const event = await Event.findById(req.params._id)

        await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${event.city}.json?access_token=${mapbox}`)
            .then(res => {
                event.lng = res.data.features[0].center[0]
                event.lat = res.data.features[0].center[1]
            })

        await event.save();

        res.send(event);

    } catch (err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
    }
})


//register for event
router.put('/:_id/register', async (req, res) => {
    try{
        const event = await Event.findById(req.body._id)
        const user = await User.findById(req.params._id)

        await client.messages
        .create({
            body: `${event.title} in ${event.address} at ${event.event_date}`,
            from: '+12086034549',
            to: user.phone_number
        })
        .then(message => console.log(message.sid));

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

    } catch (err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
    }
})


router.get('/:_id/twilio', async (req, res) => {

    try{
        const event = await Event.findById(req.params._id)
        const user = await User.findById(req.body._id)
        console.log(user)

       await client.messages
            .create({
                body: `${event.title} in ${event.address} at ${event.event_date}`,
                from: '+12086034549',
                to: user.phone_number
            })
            .then(message => console.log(message.sid));

        return res.send('Text message sent');

    } catch (err) {
        
        return res.status(500).send(`Internal Server Error ${err}`)
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


//search for events by city
router.get('/:city/cityevent', async (req, res) => {
    try {
        const events = await Event.find({city: req.params.city})

        if(!events) {
            return res.status(400).send(`No Events in this area`);
        } else {
            return res.send(events)
        }

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
    }
})



//delete event only by original user who made the post
router.delete('/:_id', async(req, res) => {
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