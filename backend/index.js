require("dotenv").config({path:"./.env.local"});
const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const cors = require('cors');
const auth = require('./routes/auth');
const users = require('./routes/users');
const events = require('./routes/events');
const upload = require("./routes/upload");


connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/events', events);
app.use('/api/file', upload);



const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})