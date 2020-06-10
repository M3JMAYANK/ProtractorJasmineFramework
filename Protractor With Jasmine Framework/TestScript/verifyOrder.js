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


util.ml.lunchURLandLogin('Launch');
util.ml.searchOrder('Order#abc123');