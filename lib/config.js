'use strict';
const config = require('config');
const path = require('path');

const schema = {

};

const conf = config({
  schema: schema,
  root: process.env.CONFIG_ROOT ||
    path.join(__dirname, '..', 'config'),
  environment: process.env.LOGICAL_ENV_NAME,
});

conf.loadFromRoot();

conf.validate({allowed: 'strict'});

module.exports = conf;
