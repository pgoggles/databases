var db = require('../db');
var con = require('../db/index.js');

module.exports = {
  getAll: function (cb) {
    var queryString = 'SELECT * FROM messages';

    con.query(queryString, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(err, data);
      }
    });
  }, // a function which produces all the messages
  create: function (username, text, roomname, cb) {
    var createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var queryString = 'INSERT INTO messages ';

    queryString += `(content, createdAt, name, githubHandle, room, campus, updatedAt) values ('${text}', '${createdAt}', '${username}', '${username}', '${roomname}', 'HR-SFO134', '${createdAt}')`;

    con.query(queryString, (err, rows) => {
      if (err) {
        cb(err);
      } else {
        cb(err);
      }
    });


    // 'INSERT INTO rooms (name) values (\'lounge\')'
  } // a function which can be used to insert a message into the database




};
