const express = require("express");
const router = express.Router();
// const bcrypt = require('bcrypt');
// const db = require('../database/models');
const usersController = require("../controllers/usersController");

// // Página de registro de usuario
router.get("/register", usersController.register);

// // Acción de registro de usuario
router.post("/register", usersController.store);

// Página de login de usuario
router.get("/login", usersController.login);

// Acción de login de usuario
router.post("/login", usersController.authenticate);

// Acción de logout de usuario
router.get("/logout", usersController.logout);

module.exports = router;
