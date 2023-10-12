// // const db = require('./db');
// const oracledb = require('oracledb');

// const oracleXeConnString = `
//   (DESCRIPTION =
//     (ADDRESS = (PROTOCOL = TCP)(HOST = LOCALHOST)(PORT = 1521))
//     (CONNECT_DATA =
//       (SERVER = DEDICATED)
//       (SERVICE_NAME = XEPDB1)
//     )
//   )
// `;

// module.exports = async (query, data = '') => {
//     const connection = await oracledb.getConnection({ 
//         user: "scott", 
//         password: "TIGER", 
//         connectionString: oracleXeConnString
//     }).then(console.log("connected successfully"));

//     return (await connection.execute(query)).rows;

// };
const fs = require('fs');
const path = require('path');
const oracledb = require('oracledb');

module.exports = async (query, data = '') => {
  const filePath = path.join(__dirname, 'bikes.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const foodData = JSON.parse(jsonData);
  return foodData;
};