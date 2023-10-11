// const db = require('./db');
const oracledb = require('oracledb');
const user=process.env.USER;
const password=process.env.PASSWORD;
const string=process.env.CONNECTION_STRING;
// const oracleXeConnString = `
//   (DESCRIPTION =
//     (ADDRESS = (PROTOCOL = TCP)(HOST = LOCALHOST)(PORT = 1521))
//     (CONNECT_DATA =
//       (SERVER = DEDICATED)
//       (SERVICE_NAME = XEPDB1)
//     )
//   )
// `;

module.exports = async (query, data = '') => {
    const connection = await oracledb.getConnection({ 
        user: user, 
        password: password, 
        connectionString: string
    }).then(console.log("connected successfully"));

    return (await connection.execute(query)).rows;
};
