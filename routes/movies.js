let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController.js');

router.get('/', moviesController.list);
router.get('/movies/:id', moviesController.detail);


module.exports = router;
