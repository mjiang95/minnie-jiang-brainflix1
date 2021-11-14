const express = require("express");
const router = express.Router();
const video = require("../data/video-details.json");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const { nextTick } = require("process");

router.get('/', (req, res) => {
    console.log("hello");
    res.status(200).json(video);
});


router.post('/', (req, res) => {
    res.send(req.body);
    const {image, title, description} = req.body; 

    video.push({
        id: uuidv4(), 
        title, 
        description, 
        channel: "Harry Potter", 
        image,
        views: "59,003,231",
        likes: "20,134,334",
        video: "http://project-2-api.herokuapp.com/stream",
        duration: "4:23", 
        timestamp: Date.now(),
        comments: [], 
    });
        fs.writeFileSync('./data/video-details.json', JSON.stringify(video));
        res.status(200).json(video);
});

module.exports = router; 