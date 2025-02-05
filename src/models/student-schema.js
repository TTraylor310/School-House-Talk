module.exports = (sequelize, DataTypes) => {
  return sequelize.define("student", {
    studentID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.INTEGER,
      // values: [9, 10, 11, 12],
      allowNull: false,
    },
    eligibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    studentSport: {
      type: DataTypes.ENUM,
      values: ["Football", "Baseball", "Basketball", "Soccer"],
      allowNull: true,
    },
  });
};
