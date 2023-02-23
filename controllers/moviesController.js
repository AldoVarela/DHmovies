let db = require('../database/models');

let moviesController = {
    list: function(req, res) {
        db.Movies.findAll()
            .then(function(movies) {
                res.render("listadoDePeliculas", {movies: movies});
            })
            
    },
    add: function(req, res) {
    },
    create: function(req, res) {
    },

    delete: function(req, res) {
    },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id)
        .then(function(movie){
            res.render("movieDetail", {movie: movie});
        })
    },

};

module.exports = moviesController;