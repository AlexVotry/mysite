// protractor protractor.config.js
var helpers = require('./test-helper');
var rootUrl = helpers.rootUrl;

describe('mysite', function() {
  beforeEach(function() {
    browser.get(rootUrl);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('mysite');
  });


});
