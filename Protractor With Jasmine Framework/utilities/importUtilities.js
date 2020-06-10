//ol as in Object definition library
//al as in Application Utilities
//ad as in Application Data
importUtilities = function(){
	
	var using = require('./node_modules//jasmine-data-provider');
	var EC = protractor.ExpectedConditions;
	var ol = require('./objectDefinitionLibrary.js');
	var ad = require('./appData.js');//require('./appDataPractice.js');
	var al = require('./applicationUtilities.js');
	var ml = require('./moduleUtilities.js');
	var date = new Date();
	var timeStamp = date.getTime();
	return {
		using : using,
		EC : EC,
		ol : ol,
		ad : ad,
		al : al,
		ml : ml,
		date : date,
		timeStamp : timeStamp

	}

	
	
	
	
}



module.exports = new importUtilities();