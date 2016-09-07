//mocha --reporter spec
var helpers = require('./test-helper');
var expect = helpers.expect;
var request = helpers.request;
var app = helpers.app;
// var request = require('supertest-as-promised');
// var expect = require('chai').expect;
// var app = require('../private/app')
// var helpers = require('./test-helper');
// var expect = helpers.expect;

describe('app', () => {
  describe('GET /', () => {
    it('responds with status 200', (done) => {
      request(app)
      .get('/')
      .expect(200)
      .end((error, response)=> {
        if (error) return done(error);
        done();
      });
    });
  });
});
