var models = require('../models');

module.exports = {
  get: function (req, res) {
    var cb = function (err, data) {
      if (err) {
        res.status(400);
        res.send('Message Could Not Be Retrieved');
      } else {
        res.status(200);
        res.send(data);
      }
    };
    models.messages.getAll(cb);
  }, // a function which handles a get request for all messages // sending data to the client
  post: function (req, res) {
    var username = req.body.username;
    var text = req.body.text;
    var roomname = req.body.roomname;
    var cb = function (err) {
      if (err) {
        res.status(400);
        res.send('Message Could Not Be Posted');
      } else {
        res.status(200);
        res.send('Message Posted');
      }
    };
    models.messages.create(username, text, roomname, cb);
  } // a function which handles posting a message to the database // receiving data from the client
};
