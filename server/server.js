const express = require('express')
const cors = require("cors");

const app = express();

require("dotenv").config();
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json());

app.use(express.static('public'));

const videoRoute = require('./routes/video');
const videoListRoute = require('./routes/videolist');

app.use('/video', videoRoute); 
app.use('/videolist', videoListRoute);


app.listen(port, function () {
    console.log("App is running on PORT ${port}");
})

