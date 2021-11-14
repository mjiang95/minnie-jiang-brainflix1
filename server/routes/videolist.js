const express = require("express");
const router = express.Router();
const video = require("../data/video-details.json");


router.get('/:id', (req, res) => {
    
    res.status(200).json(video.find(video => video.id === req.params.id))
})

module.exports = router; 