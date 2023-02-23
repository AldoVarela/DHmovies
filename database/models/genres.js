module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, // add this option to mark the column as the primary key
            autoincrement: true,
        },
        name:{
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.INTEGER
        },


    };
    let config = {
        tableName: "genres",
        timestamps: false,
    };
    const Genres = sequelize.define(alias, cols, config);

    return Genres;
}