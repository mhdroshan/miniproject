module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      u_name: {
        type: Sequelize.STRING
      },
      u_email: {
        type: Sequelize.STRING
      },
      u_phone: {
        type: Sequelize.INTEGER
      },
      u_age: {
        type: Sequelize.INTEGER
      },
      u_address: {
        type: Sequelize.STRING
      },
      u_pass:{
        type:Sequelize.STRING
      },
      u_pic:{
        type: Sequelize.STRING
      },
      verified: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
  };