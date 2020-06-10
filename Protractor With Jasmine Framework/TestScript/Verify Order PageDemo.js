//Login to Internal Site
//Login with Admin Credential
//Check for order search page
'use strict';
var util = require('../utilities/importUtilities.js');

var path = require('path');
var TestName = path.basename(__filename);


describe("Execution Started", function() {
	it("Test Case : "+TestName, function() {
		console.log(TestName);
	})
})

util.ml.lunchURLandLogin('Login');
describe("Check Order Page", function() {
	it("Check if Profile Icon is present on Top-right hand side of Order search page", function() {
		browser.wait(util.EC.presenceOf(util.ol.ProfileDrop), 5000);
	})
	it("Click on my Profile Icon: User will be able to see three dropdown:My Profile, Change User group, Help", function() {
		util.al.waitAndClick(util.ol.ProfileDrop);
		expect(util.ol.ProfileDropDown.getText()).toEqual(['My Profile', 'Change user group', 'Help']);
	})
})
describe("Check Invalid Order Search ", function() {
	it("Enter Invalid no in Search field", function() {
		util.al.inputText(util.ol.searchInput,'Test');
		util.al.waitAndClick(util.ol.searchBtn);
	})
	it("Error Will be displayed", function() {
		browser.wait(util.EC.presenceOf(util.ol.errorWorngOrder), 20000);
	})
})

