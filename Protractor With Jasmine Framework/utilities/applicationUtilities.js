//#All the reusable functions from application.
var util = require('../utilities/importUtilities.js');
var EC = protractor.ExpectedConditions;
applicationUtilities = function(){


//	launchUrl
	launchUrl = function(appURL) {

		browser.waitForAngularEnabled(false);
		browser.manage().window().maximize();
		browser.get(appURL);
	//	expect(browser.getTitle()).toBe("Developer Portal");
	}

//	Entering text
	inputText=function(object,input){

		browser.actions().mouseMove(object).perform();
		object.sendKeys(input);
		console.log("Text Entered succesfully : "+input);
	}
//	Entering text after cleaning
	inputTextAfterClean=function(object,input){

		browser.actions().mouseMove(object).perform();
		object.clear();
		object.sendKeys(input);
		console.log("Text Entered succesfully : "+input);
	}
	
	
//	Click on Non angular pages or for wait and click
	waitAndClick=function(object){
		var isclic = EC.elementToBeClickable(object);
		browser.wait(isclic, 10000);
		object.click();
	}
//	Hover over an Element

	hover = function(hover) {
		browser.actions().mouseMove(hover).perform();
	}
	
//	Select A value from dropdown
	selectClick=function(object,index){
		object.get(index).click();
		/*element.all(by.repeater('task in tasks')).
		  get(1).
		  element(by.linkText('Complete')).
		  click()*/
	}
	
//	To verify Text in more then one element with same tag name  

	textVerify=function(object,text) {
		//expect(object.getText()).toContain(text)
			object.getText().then(function(value) {
				console.log(value);
				expect(value).toEqual(text);
			})

		}	
//	To verify Text containing in array more then one element with same tag name  

	containTextVerify=function(object,text) {
		//expect(object.getText()).toContain(text)
			object.getText().then(function(value) {
				console.log(value);
				expect(value).toContain(text);
			})

		}	
//	Check if Element is disable
	disableElement=function(object,Value){
		object.getAttribute('disabled').then(function(ActualValue) {
			console.log(ActualValue);
			expect(ActualValue).toEqual(Value);
		})

	}



	return{
		launchUrl:launchUrl,
		inputText:inputText,
		inputTextAfterClean:inputTextAfterClean,
		waitAndClick:waitAndClick,
		hover:hover,
		selectClick:selectClick,
		textVerify:textVerify,
		containTextVerify:containTextVerify,
		disableElement:disableElement,

	};













}
module.exports = new applicationUtilities();