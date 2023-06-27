const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../db");
const RoomModel = require("./room.model");

var ApartmentModel = sequelize.define("apartment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    roomCount: Sequelize.INTEGER,
    status: Sequelize.INTEGER,
    cost: Sequelize.INTEGER,
});

// define the Apartment-Room association
ApartmentModel.hasMany(RoomModel, { foreignKey: { allowNull: false } });
RoomModel.belongsTo(ApartmentModel);

module.exports = ApartmentModel;
