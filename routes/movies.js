let express = require('express');
let router = express.Router();
let moviesController = require('../controllers/moviesController.js');

//listado (en este caso funciona como home)
router.get('/', moviesController.list); 

//vista crear pelicula
router.get('/movies/add', moviesController.add) 
router.post('/movies/add', moviesController.create);

//vista edit pelicula
router.get('/movies/edit/:id', moviesController.edit); 
router.post('/movies/edit/:id', moviesController.update);

router.post('/movies/delete/:id', moviesController.delete);

//vista detail
router.get('/movies/:id', moviesController.detail); 


module.exports = router;
