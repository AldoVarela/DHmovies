module.exports = (sequelize, dataTypes) => {
    let alias = "Migrations";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, // add this option to mark the column as the primary key
            autoincrement: true,
        },
        migration:{
            type: dataTypes.STRING
        },
        batch: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: "migrations",
        timestamps: false,
    };
    const Migrations = sequelize.define(alias, cols, config);

    return Migrations;
}