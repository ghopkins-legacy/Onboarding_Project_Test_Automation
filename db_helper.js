const Helper = require('@codeceptjs/helper');
const sql = require("mssql");
const assert = require("assert");
require('dotenv').config();

const sqlConfig = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  options: {
    instanceName: process.env.INSTANCE_NAME,
    port: process.env.DB_PORT,
    encrypt: false
  }
};


class Db extends Helper {
  async getJanusPersonRecord(){
    let querySearch = `
    SELECT TOP 1 * 
    FROM tblPerson (NOLOCK) 
    WHERE Source 
    IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')`;

    try {
      await sql.connect(sqlConfig);
      const result = await sql.query(querySearch);
      const pid = result.recordsets[0][0].PersonId
      sql.close();
      return pid;

    } catch (error) {
      console.log(error);
      assert.fail(error, 'DB connection', 'Cannot connect to database')
    }
  }
}

module.exports = Db;
