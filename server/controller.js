const Sequelize = require('sequelize');
require('dotenv').config;

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})

module.exports = {
  getAllInfo: (req, res) => {
    sequelize
    .query(`
      SELECT * FROM input;
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => res.status(400).send(err))
  },
  postNewInfo: (req, res) => {
   const {body: {text}} = req

    sequelize
    .query(`
      INSERT INTO input(text)
      VALUES ('${text}');
    `)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => res.status(400).send(err))
  }

}