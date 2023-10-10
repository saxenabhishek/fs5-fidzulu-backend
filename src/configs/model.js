// const db = require('./db');
const oracledb = require('oracledb');

const oracleXeConnString = `
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = LOCALHOST)(PORT = 1521))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = XEPDB1)
    )
  )
`;

module.exports = async (query, data = '') => {
    const connection = await oracledb.getConnection({ 
        user: "scott", 
        password: "TIGER", 
        connectionString: oracleXeConnString
    }).then(console.log("connected successfully"));

  return new Promise((resolve, reject) => {
    connection.execute(query, (err, results) => { // Fix the arrow function definition here
      if (err) {
        reject(err);
      } else {

        resolve(results.rows);
      }
    });
  });
};
