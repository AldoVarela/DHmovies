const express = require('express');
const bodyParser = require('body-parser');

const app = express();	
const moviesRoutes = require('./routes/movies');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //listo para recibir peticiones post.

//rutas
app.use('/', moviesRoutes);

  
app.get('/', function(req, res) {
    res.render('listadoDePeliculas', { Movies: Movies });
  });

app.set("view engine", "ejs"); //vistas ejs


// app.get('/', (req, res) => {
//     res.render('listadoDePeliculas')
// });

app.listen(3030, () => {
    console.log('servidor corriendo en puerto 3030');
});
