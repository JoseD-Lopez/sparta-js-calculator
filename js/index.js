
var calcChoice = prompt('Would you like to use the basic or the advance calculator? for Advance press 1 for Basic press 2');

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
	
var typeofCalculation = prompt('For addition press 1, for multiplication press 2, for division press 3, for subtraction press 4');
 
 switch(typeofCalculation){
 	case '1':
 	var answer = parseInt(number1) + parseInt(number2);
 	alert(answer);
 	break;
 	case '2':
 	var answer = parseInt(number1) * parseInt(number2);
 	alert(answer);
 	break;
 	case '3':
 	var answer = parseInt(number1) / parseInt(number2);
 	alert(answer);
 	break;
 	case '4':
 	var answer = parseInt(number1) - parseInt(number2);
 	alert(answer);
 	break;
 }
}
else if(calcChoice === 3) {
	alert('exit');
	
}