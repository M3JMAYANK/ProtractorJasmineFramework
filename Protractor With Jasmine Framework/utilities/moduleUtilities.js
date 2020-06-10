//Basic Functionality Flow 

var using = require('C://Users//612221329//node_modules//jasmine-data-provider');
var EC = protractor.ExpectedConditions;
var ol = require('../utilities/objectDefinitionLibrary.js');
var ad= require('../utilities/appData.js');
var al = require('../utilities/applicationUtilities.js');
var util = require('../utilities/importUtilities.js');

moduleFunctionality = function(){

	lunchURLandLogin = function(){

		describe("Launching the portal", function() {
			it("Hit the URL", function() {
				al.launchUrl(ad.appURL);
			})
			it("login", function() {
				browser.getTitle().then(function(title){
					if(title=='Sign in'){
						al.inputText(ol.userName, ad.Admin);
						al.inputText(ol.password, ad.Password);
						al.waitAndClick(ol.signOn);
						browser.sleep(10000);
					}
				})
			})
		})
	}
	return{
		lunchURLandLogin:lunchURLandLogin
	};

};
module.exports = new moduleFunctionality();