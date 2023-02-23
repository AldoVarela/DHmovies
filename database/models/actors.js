module.exports = (sequelize, dataTypes) => {
    let alias = "Actors";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, // add this option to mark the column as the primary key
            autoincrement: true,
        },
        first_name:{
            type: dataTypes.STRING,
        },
        last_name: {
            type: dataTypes.STRING,
        },
        rating: {
            type: dataTypes.INTEGER,
        },
        favorite_movie_id:  {
            type: dataTypes.INTEGER,
        }

    };
    let config = {
        // tableName: "actors",
        timestamps: false,
    };
    const Actors = sequelize.define(alias, cols, config);

    return Actors;
}