const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

try {
  sequelize.authenticate();
  console.log("Banco conectado com sucesso!");
} catch (error) {
  console.error(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
