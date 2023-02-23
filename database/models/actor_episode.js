module.exports = (sequelize, dataTypes) => {
    let alias = "Actors_episodes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, // add this option to mark the column as the primary key
            autoincrement: true,
        },
        actor_id:{
            type: dataTypes.INTEGER,
        },
        episode_id: {
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: "actors_episodes",
        timestamps: false,
    };
    const Actor_episode = sequelize.define(alias, cols, config);

    return Actor_episode;
}