module.exports = (sequelize, DataTypes) => {
  const Detail = sequelize.define(
    'Detail',
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      contact: {
        type: DataTypes.INTEGER,
      },
    }
    // {
    //   // timestamps: false,
    //   createdAt: false,
    //   updatedAt: false,
    // }
  )
  return Detail
}
