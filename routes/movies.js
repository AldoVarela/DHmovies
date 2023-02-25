let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController.js');

router.get('/', moviesController.list);
// router.get('/movies/crear', moviesController.crear);
router.get('/movies/add', moviesController.add)
router.post('/movies/add', moviesController.create);
router.get('/movies/modify', moviesController.modify);
router.get('/movies/delete', moviesController.delete);
router.get('/movies/:id', moviesController.detail);


module.exports = router;
