//01- Number
var integer = 102;
var float = 13.9;
console.log(integer, float) //102 13.9

//02- Convert
var basic = 34;
var stringified = basic.toString();
console.log(stringified.length);//2

//03-Round
var num = 1.5;
var rounded = Math.round(num)
console.log(rounded);//2

//04-Arithmétique
var test = 12;
var bis = 5;
console.log(test+bis , test-bis , test*bis , test/bis, test**bis, test%bis) ;
          //   17       7          60         2.4         248832     2

//05-comparaison
var test = 143;
var bis = 219;
console.log(test > bis , test < bis , test>=bis , test<=bis , test==bis , test===bis , test!=bis , test!==bis );
//             false         true        false      true        false       false         true        true

//06-Condition
var limit = 50;
var score = 64;
if (score>= limit){
    console.log("OK good");//OK good

}
else {console.log("oh noooo...") 
   //oh noooo...
}

var limit = 50;
var score = 20;
if (score>= limit){
    console.log("OK good");//oh noooo

}
else {console.log("oh noooo...") 
   //oh noooo...
}



//07 - Condition 2
var password = "azerty";

if (password.length > 5 ){
    console.log("The password is secure")
}//λ The password is secure
else {console.log("azerty") }


//08-Condition3
var limit = 50;
var score = 64;
var password = "azerty";

if (score>= limit &&  password.length > 5)
{
    console.log("Everything is good");

}
   

else if (score>= limit || password.length > 5)
{
    console.log("Something is good");
}
else {console.log("Nothing is good") }


// 11-bonus
var min = 1;
var max = 10;

var random = Math.floor(Math.random() * (max - min + 1) + min);

if (random <= 10)
{
    console.log("Yes I win ")
}
else {console.log("So close...") }


// 12-Bonus
var month = "January";
switch (month) 
{
    case "January": 
    case "February":
    case "March": 
		console.log("winter");
		break;
	case "April": 
    case "May":
    case "June":
		console.log("Spring");
		break;
	case "July":
    case "August": 
    case "September":
		console.log("summer");
		break;
	case "Octobere": 
    case "November":
    case "December":
		console.log("Autumn");
		break;	
	
}






