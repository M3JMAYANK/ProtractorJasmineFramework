//#ObjectDefinitionLibrary Strictly used for only application xpaths
objectUtil = function(){

	//Initial Admin Login Page
	var userName = element(by.xpath("//input[@name='USER']"));
	var password = element(by.xpath("//input[@name='PASSWORD'] ")); 
	var signOn = element(by.xpath("//input[@value='Sign On'] | //button[contains(text(),'Sign me in')]"));//input[@onclick='submitForm();']
	var Yes = element(by.xpath("//input[@name='YES'] | //form[contains(@class,'form-user-signup')]//a[text()='Yes']"));

	return{
		
		userName:userName,
		password:password,
		signOn:signOn,
		Yes:Yes		
	}
}
module.exports = new objectUtil();