var HtmlReporter = require('C://Users//mayank//node_modules//protractor-beautiful-reporter');
var date = new Date()
var timeStamp = date.getTime();

exports.config = {

		//seleniumAddress : 'http://localhost:4444/wd/hub',
		directConnect:true,
		specs : [
			'TestScript/verifyOrder.js',
			],

			jasmineNodeOpts : {
				defaultTimeoutInterval : 120000,
				//stopSpecOnExpectationFailure : true
			},

			/*
			 * capabilities: { 'browserName': 'internet explorer' },
			 */

			multiCapabilities : [

				{ 'browserName': 'chrome' },

				/*{
					'browserName' : 'firefox',
					'acceptInsecureCerts' : true,
					'browserVersion' : "61.0.2",
					'moz:firefoxOptions' : {
						'args' : [ '--safe-mode' ]
					}
				},*/

				/*{ 'browserName': 'internet explorer', 
					 'platform': 'ANY',
					 'version': '11'
				 //"browserVersion": "11",
					 }*/


				],

				/*
				 * capabilities: { 'browserName': 'firefox', 'acceptInsecureCerts': true,
				 * 'browserVersion': "62.0", 'moz:firefoxOptions': { 'args': ['--safe-mode'] } },
				 */

				/*beforeLaunch : function() {
					browser.getProcessedConfig().then(function(config){
				        console.log(config.specs)
				    })
				},*/

				onPrepare : function() {

					jasmine.getEnv().addReporter(
							new HtmlReporter({
								baseDirectory : 'Report/test' + timeStamp,
								docTitle : 'Automation Report',
								screenshotsSubfolder : 'images',
								jsonsSubfolder : 'jsons',
								metaDataBuilder : function metaDataBuilder(spec,
										descriptions, results, capabilities) {
									return {
										description : descriptions.join(' '),
										passed : results.passed()
									}
								}
							}).getJasmine2Reporter());
				}

};