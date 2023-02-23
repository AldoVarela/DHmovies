module.exports = (sequelize, dataTypes) => {
    let alias = "Series";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, // add this option to mark the column as the primary key
            autoincrement: true,
        },
        title:{
            type: dataTypes.STRING
        },
        release_date: {
            type: dataTypes.DATE
        },
        end_date: {
            type: dataTypes.DATE
        },
        genre_id: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: "series",
        timestamps: false,
    };
    const Series = sequelize.define(alias, cols, config);

    return Series;
}