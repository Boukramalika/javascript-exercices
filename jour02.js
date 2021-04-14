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
else if (score< limit);{
    console.log("oh noooo...")
}
