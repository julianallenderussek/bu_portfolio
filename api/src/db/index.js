const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 10,        
  host: '209.38.6.175',       
  user: 'foodie',             
  password: 'SuperFood1!',    
  database: 'personal_webpage',
  port: 3306
});

module.exports = db;
