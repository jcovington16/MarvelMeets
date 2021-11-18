const {User, validateUser} = require('../models/user');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');



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


module.exports = router;