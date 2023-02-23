module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, // add this option to mark the column as the primary key
            autoincrement: true,
        },
        title:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.STRING
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: "movies",
        timestamps: false,
    };
    const Movie = sequelize.define(alias, cols, config);
    // Add the association to the Genre model
    Movie.belongsTo(sequelize.models.Genres, {
        as: "genre", // the alias for the associated model
        foreignKey: "genre_id" // the foreign key in the Movies table
  });

    return Movie;
}