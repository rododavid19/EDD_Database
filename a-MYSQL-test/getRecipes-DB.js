var db = require("./funyums-DB-connection.js");

var serial = "";

function getRec() {

  return db.query('SELECT * FROM edd_sales');
}

var  edd_DB_getter = {


  getAll: function( callback) {
    return db.query('SELECT * FROM edd_sales', callback);
  },

  getSerial: function(callback) {
   // console.log(serial);
    return db.query('SELECT * FROM edd_sales where serial = 1', callback);
  },


};

module.exports = edd_DB_getter;


