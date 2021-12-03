const {User, validateUser} = require('../models/user');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const upload = require('../middleware/upload');



router.post('/', async (req, res) => {
    try {
        const { error } = validateUser(req.body);

        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered.');

        const salt = await bcrypt.genSalt(10);
        user = new User({
            city: req.body.city,
            email: req.body.email,
            favhero: req.body.favhero,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: await bcrypt.hash(req.body.password, salt),
            phone_number: req.body.phone_number,
            state: req.body.state,
            username: req.body.username,

    });

        await user.save();

        const token = user.generateAuthToken();

        return res
            .header('x-auth-token', token)
            .header('access-control-expose-headers', 'x-auth-token')
            .send({ _id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email });
           

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


router.get('/:_id/profile', async (req, res) => {
    const user = await User.findById(req.params._id)

    if(!user) return res.status(400).send('No User profile with that ID')
    return res.send(user);
});


router.put('/:_id/profile', upload.single('photo'), async(req, res) => {

    if (req.file) {
        const user = await User.findByIdAndUpdate(req.params._id, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            city: req.body.city,
            state: req.body.state,
            favhero: req.body.favhero,
            bio: req.body.bio,
            phone_number: req.body.phone_number,
            photo: req.file.buffer.toString('base64'),
            photo_mimetype: req.file.mimetype
        })
        return res.send('Update Successful');
    } else {
        const user = await User.findByIdAndUpdate(req.params._id,
            {firstname: req.body.firstname,
             lastname: req.body.lastname,
             email: req.body.email,
             city: req.body.city,
             state: req.body.state,
             favhero: req.body.favhero,
             bio: req.body.bio,
             phone_number: req.body.phone_number},
             {new: true}
        );

        if(!user) return res.status(400).send(`The user with id ${req.params._id} does not exist.`)

        return res.send('Update Successful');
    }


});

module.exports = router;