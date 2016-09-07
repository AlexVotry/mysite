var request = require('supertest-as-promised');
var expect = require('chai').expect;
var app = require('../private/app')

// require('mysite');
// require('angular-mocks');

// var request = require('supertest-as-promised');
// var chai = require('chai');
//
//
// chai.use('sinon-chai');
// chai.use('chai-as-promised');
//
// var sinon = require('sinon');
//
// beforeEach(function() {
//   this.sinon = sinon.sandbox.create();
// });
//
// afterEach(function() {
//   this.sinon.restore();
// });
//
module.exports = {
  request: request,
  app: app,
  rootUrl: 'http://localhost:3000',
  expect: expect
}
