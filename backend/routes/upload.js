const upload = require('../middleware/upload');
const {User} = require('../models/user');
const {Event} = require('../models/event');
const express = require('express');
const router = express.Router();

router.put('/:_id/upload', upload.single('file'), async (req, res) => {

    try{
        const user = await User.findByIdAndUpdate(req.params._id, {photo: req.file.buffer});

        if (req.file.buffer === undefined) return res.send("You must select a image");
    
        return res.send(req.file.buffer);
    } catch (err) {
        return res.status(500).send(`Internal Server Error: ${err}`)
    }

});

router.put('/:_id/upload', upload.single('file'), async (req, res) => {
    const user = await User.findById(req.params._id);

})

module.exports = router;