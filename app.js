const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "public");
const moviesRoutes = require("./routes/movies");

const methodOverride = require("method-override");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const usersRoutes = require("./routes/usersRoutes");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const adminLoggedMiddleware = require("./middlewares/adminLoggedMiddleware");

// Configuración de la sesión
app.use(
  session({
    secret: "DHloco",
    resave: false,
    saveUninitialized: false,
    name: "DH movies",
    cookie: { maxAge: 60000 },
  })
);

// MiddleWares
app.use(userLoggedMiddleware);
app.use(adminLoggedMiddleware);

app.use(methodOverride("_method")); // manejar metodos put y delete
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //listo para recibir peticiones post.
app.use(cookieParser());
app.use(express.json());

//rutas
app.use(express.static(publicPath));
// Definición de las rutas de usuario
app.use("/", usersRoutes);
app.use("/", moviesRoutes);

// Configuración de la sesión
app.use(
  session({
    secret: "DHloco",
    resave: false,
    saveUninitialized: false,
    name: "DH movies",
    cookie: { maxAge: 60000 },
  })
);

app.get("/", function (req, res) {
  res.render("listadoDePeliculas", { movies: movies });
});

app.get("/register", function (req, res) {
  res.render("register");
});

//vistas ejs
app.set("view engine", "ejs");

//escuchando el puerto 3030
app.listen(3030, () => {
  console.log("servidor corriendo con exito en puerto 3030");
});
