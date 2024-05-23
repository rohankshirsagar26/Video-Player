const express = require('express');
const { getVideo, getVideos, createVideo, updateVideo, deleteVideo } = require('../controller/controller');

const router = express.Router();

router.get('/', getVideos);
router.get('/:id', getVideo);
router.post('/', createVideo);
router.put('/:id', updateVideo);
router.delete('/:id', deleteVideo);

module.exports = router;