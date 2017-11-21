module.exports = function (sequelize, DataTypes) {

	var Burger = sequelize.define("burgers", {
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN,
		//timestamps: true
	});

return Burger;

};

