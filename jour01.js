//01 - hello world
console.log("Hello World !"); //λ Hello World !

//02 -String
var test;
test = "my name is malika";
console.log(test); //my name is malika

//03 -Concatenation
var name ;
name ="malika";
console.log("nice to meet you " + name );//nice to meet you malika


//04- String Length
var testlength;
testLength ="I am very long!";
console.log(test.length);//17

//05- Replace
var food;
food ="croissant is meh";
food = food.replace("meh", "so good");
console.log(food);//croissant is so good

//06 Up and Down
var basic ="This is Cool";
console.log(basic);
var basicUpperCase = basic.toUpperCase();
console.log(basicUpperCase);
var basicDown = basic.toLowerCase();
console.log(basicDown); //This is Cool;THIS IS COOL;this is cool


//07 Split
var word  ="banana";
var letters = word.split("");
console.log(letters);//[ 'b', 'a', 'n', 'a', 'n', 'a' ]


//08 Template
var age ="29";
var template =`I am ${age} years old`;
console.log(template);//I am 29 years old

//10- Includes
var bisou = "bisou";
var phrase1 = "casse toi pov'con";
var phrase2= "bisou mon chéri";
var doesPhrase1IncludesBisou = phrase1.includes(bisou);
var doesPhrase2IncludesBisou = phrase2.includes(bisou);
console.log(doesPhrase1IncludesBisou, doesPhrase2IncludesBisou);





