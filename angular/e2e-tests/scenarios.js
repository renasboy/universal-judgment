'use strict';

describe('Heaven Hell', function() {

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/testURL');
    });


    it('should render home when user navigates to /', function() {
      expect(element.all(by.css('[ng-view] header')).first().getText()).
        toMatch(/HeavenHell/);
    });

  });

});
