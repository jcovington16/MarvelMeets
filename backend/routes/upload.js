const upload = require('../middleware/upload');
const {User} = require('../models/user');
const {Event} = require('../models/event');
const express = require('express');
const router = express.Router();

router.post('/:_id/upload', upload.single('file'), async (req, res) => {

    const user = await User.findById(req.params._id);
    

    if (req.file === undefined) return res.send("You must select a image");
    //const imgUrl = `http://localhost:5001/api/file/${req.file.filename}/upload`;
    return res.send(req.file);
});

router.put('/:_id/upload', upload.single('file'), async (req, res) => {
    const user = await User.findById(req.params._id);

})

module.exports = router;