let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController.js');

router.get('/', moviesController.list); //listado
router.get('/movies/add', moviesController.add) //vista add
router.post('/movies/add', moviesController.create);
router.get('/movies/edit/:id', moviesController.edit); //vista edit
router.post('/movies/edit/:id', moviesController.update);
router.post('/movies/delete/:id', moviesController.delete);
router.get('/movies/:id', moviesController.detail); //vista detail


module.exports = router;
