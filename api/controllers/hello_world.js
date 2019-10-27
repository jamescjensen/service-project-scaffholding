'use strict';
const util = require('util');

/**
  * Functions in a127 controllers used for operations should take two parameters:
 * @param {int} req a handle to the request object.
 * @param {int} res a handle to the response object.
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  // this sends back a JSON response which is a single string
  res.json(hello);
}

module.exports = {
  hello: hello,
};
