const express = require('express');
const bodyParser = require('body-parser');
const app = express();	
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const moviesRoutes = require('./routes/movies');
const methodOverride = require("method-override");



app.use(methodOverride("_method")); // manejar metodos put y delete
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //listo para recibir peticiones post.

//rutas
app.use( express.static (publicPath) );
app.use('/', moviesRoutes);

app.get('/', function(req, res) {
    res.render('listadoDePeliculas', { Movies: Movies });
  });

//vistas ejs
app.set("view engine", "ejs"); 


//escuchando el puerto 3030
app.listen(3030, () => {
    console.log('servidor corriendo con exito en puerto 3030');
});

