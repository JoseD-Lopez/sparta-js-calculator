
var calcChoice = prompt('Would you like to use the basic or the advance calculator? for Advance press 1 for Basic press 2 and press 3 to calculate your BMI');

if(calcChoice == 1){

alert('You have chosen the advance calculator');
var opertationChoice = prompt('What operation would you like to perform? to find the Power press 1 for the Square Root press 2');

if(opertationChoice == 1){
	//power of a number operation
var base = prompt('Enter the base number');
var exponent = prompt('Enter the exponent');

var answer = Math.pow(base, exponent); 
alert(answer);
}
else if(opertationChoice == 2){
//square root operation
var	numberSqr = prompt('Please enter the number you want to find the square root of');

var answer = Math.sqrt(numberSqr);

alert(answer);
}
}

else if (calcChoice == 2){
alert('You have chosen the basic level calculator');

var number1 = prompt('Please enter the first number you want to perform calculation on');
var number2 = prompt('Please enter the second number you want to perfom a calculation on');
	
	var x = parseInt(number1);
	var y = parseInt(number2);
var typeofCalculation = prompt('For addition press 1, for multiplication press 2, for division press 3, for subtraction press 4');
 
 switch(typeofCalculation){
 	case '1':
 	var answer = x + y;
 	alert(answer);
 	break;
 	case '2':
 	var answer = x * y;
 	alert(answer);
 	break;
 	case '3':
 	var answer = x / y;
 	alert(answer);
 	break;
 	case '4':
 	var answer = x - y
 	alert(answer);
 	break;
 }

}
else if(calcChoice == 3) {
	alert('You have chosen the BMI calculator');

var imperialOrMetric = prompt('Please press 1 for imperial or 2 for metric system');

if(imperialOrMetric == 1){

var heightfeet = prompt('Please Enter your height in feet');
var additionalInches = prompt('Please enter any additional inches');
var weightpounds = prompt('Please Enter your weight pounds');

var calcInches = parseInt(additionalInches) + parseInt(heightfeet) * 12;

var answer =  (parseInt(weightpounds) / (calcInches * calcInches)) * 703;

alert('Your BMI is : '+ answer.toFixed(2));

} 

else if(imperialOrMetric == 2){
var weightkg = prompt('Please Enter your weight KG');
var heightmtrs = prompt('Please Enter your height in meters');

var weight = parseFloat(weightkg);
var height = parseFloat(heightmtrs);

var heightPow2 = Math.pow(height, 2);

var answer = weight / heightPow2;

alert('Your BMI is: ' + answer.toFixed(2));
}
}
else{
	alert('exit');
}





