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


//03 - Even
function checkIfEven (num)
{
    if (num % 2 === 0){
        return console.log("even");
    }
    else if(num % 2 === 1)   
    {
        return console.log("odd");
    }   
    
}
checkIfEven(201);

//04 - Compare
function compare (num1 ,num2)
{
    if (num1 > num2 )
    {
    return console.log("num1 is bigger");
    }
    else if (num2 > num1 )
    {
    return console.log("num2 is bigger");
    } else  (num1 === num2)
    {
        return console.log("both are the same");
    }
}

let resultat1 = compare (55,55);
//console.log(" resultat1", resultat1);

//05 - Add Up
function addUp (num)
{ 
    var addition = num;
    for(var i = 0 ; i <  num ; i ++)
    {
        addition +=  i ;
    }
    return addition;
}

let resultat3=addUp(12);
console.log(resultat3)


//06 - Time
function format(num)
{
    let totalSeconds = num;

    
    let heures = Math.floor(totalSeconds/ 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let secondes = totalSeconds % 60;



    return console.log(`${heures} : ${minutes} : ${secondes}`);
}

let resultat4=format(3700);
console.log(resultat4);
