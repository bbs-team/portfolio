module.exports =(sequelize, DataTypes) => {
  return sequelize.define('project', {
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