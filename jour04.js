//01 - Object
var cat = 
{
    name   :  "Garfield",
    age    : 3,
    isCute :true,
};
console.log(cat);
console.log(cat["age"]); 

if (cat["isCute"] === true)
{
    console.log( "So cute !")
 
};



//02 - Combine
var cat2 = 
{
    name   :  "Garfield",
    age    : 5,
    isCute :false,
};
let cats =[cat ,cat2];
console.log(cats);
console.log(cat["age"]);
console.log(cat2["isCute"]);



