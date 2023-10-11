const oracledb = require('oracledb');
const user = process.env.USER;
const password = process.env.PASSWORD;
const oracleXeConnString = process.env.CONNECTION_STRING;

module.exports = async (query, data = '') => {
    const connection = await oracledb.getConnection({ 
        user: user, 
        password: password, 
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
}