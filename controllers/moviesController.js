let db = require('../database/models');

let moviesController = {
    list: function(req, res) {
        db.Movies.findAll()
            .then(function(movies) {
                res.render("listadoDePeliculas", {movies: movies});
            })
            
    },
    // crear: function(req, res) {
    //     db.Genres.findAll()
    //         .then(function(genres) {
    //             return res.render("listadoDePeliculas", {genres: genres});
    //     })
    // },
    add: function(req, res) {
        db.Genres.findAll()
        .then(function(genres) {
            return res.render("createMovie", {genres: genres});
                 })
             },
    create: function(req, res) {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })
        .then(function() {
            res.redirect('/');
        });
    },
    modify: function(req, res) {
    },

    delete: function(req, res) {
    },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id, {
            include: [{association: "genre"}, {association: "actors"}]
        }) 
        .then(function(movie){
            res.render("movieDetail", {movie: movie});
        })
    },

};

module.exports = moviesController;