const Video = require('../model/video');

const getVideo = (req, res) => {
    Video.findById({ _id: req.params.id })
        .then((video) => {
            res.status(200).send(video);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        })
}

const getVideos = (req, res) => {
    Video.find({})
        .then((videos) => {
            res.status(200).send(videos);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        })
}

const createVideo = (req, res) => {
    const { title, url, description } = req.body
    const newVideo = new Video({ title, url, description });
    newVideo.save()
        .then(() => {
            res.status(200).send(newVideo);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
}

const updateVideo = (req, res) => {
    Video.findOneAndUpdate(
        { _id: req.params.id }, { $set: req.body }
    )
        .then((video) => {
            res.status(200).send(video);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
}

const deleteVideo = (req, res) => {
    Video.findOneAndDelete({ _id: req.params.id })
        .then((video) => {
            res.status(200).send(video);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
}


module.exports = { getVideo, getVideos, createVideo, updateVideo, deleteVideo }