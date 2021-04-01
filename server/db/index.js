
// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your new password',
  database: 'chat'
});

module.exports = con;

// con.query('DESCRIBE messages', (err, rows) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(rows);
//   }
// });

// con.query('INSERT INTO rooms (name) values (\'lounge\')', (err, rows) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(rows);
//   }
// });

// con.query('SELECT * FROM rooms', (err, rows) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(rows);
//   }
// });

