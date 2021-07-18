const express = require('express');
const router = express.Router();

const route_playlists = require('./playlists');

router.use("/playlists", route_playlists);

module.exports = router;