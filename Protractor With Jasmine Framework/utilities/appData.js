//$ Application Data
var date = new Date();
var timeStamp = date.getTime();
var excelData = require('C://Users//mayank//node_modules//exceljs');
//var xlsx = require('C://Users//mayank//AppData//Roaming//npm//node_modules//xlsx');
//var test = require('../utilities/myDataLibrary.json');
//var uName,pass,url;
var Order,OrderType

appData = function()
{
	/*appd = function(TestCaseName) {

		for (var k in test) {
			if (test[k].TestCaseID == TestCaseName) {
				var uName = test[k].Data.Username;
				var pass = test[k].Data.Password;
				var url = test[k].Data.URL;
				var email = test[k].Data.Email;
				break
			}
		}
		return {

			uName : uName,
			pass : pass,
			url : url,
			email : email,
		}
	}
	 */
	//var OrderType//TestCase
       testdata = function (TestCase) {
		//var workbook = xlsx.readFile('TestData.xlsx');
    	   var workbook = new excelData.Workbook();
    	   var data = new Array();
    	  
		return workbook.xlsx.readFile('TestData.xlsx').then(function () {
			var worksheet = workbook.getWorksheet('Data');
		    //var worksheet = workbook.Sheets['Data'];
			var rowno = worksheet.rowCount;
			var colno = worksheet.columnCount;
			console.log(rowno, colno);
			for (var i = 1; i <= rowno; i++) {
				var cellvalue = worksheet.getRow(i).getCell(1).value;
				console.log(cellvalue);
				console.log(TestCase);
				if (TestCase == cellvalue){
					console.log("Inside If Condition")
					Order = worksheet.getRow(i).getCell(2).value;
					OrderType = worksheet.getRow(i).getCell(3).value;
					console.log(Order);
					console.log(OrderType);
					break;
				}
			}
			return {
				Order:Order,
				OrderType:OrderType
			}	
		})
    	
		
	}
	

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//logon
	var appURL ="http://demo.com";
	var Admin = "admin";
	var Password = "pwd";	
	OrderIDs=function(){
		return [
			{siebelID:"abc"},
			{siebelID:"abc2"},
			{siebelID:"abc3"},
			]};	
	return {
		//appd:appd,
		testdata:testdata,
		Admin:Admin,
		appURL:appURL,
		Password:Password,
		OrderIDs:OrderIDs,
	}
}
module.exports= new appData();