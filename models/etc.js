module.exports =(sequelize, DataTypes) => {
  return sequelize.define('etc', {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      num:{
        type: DataTypes.INTEGER
      },
    },
    {
      timestamps: true,
    });
};