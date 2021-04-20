//01 - Sum
var numbers = [];
var min = 0 ;
var max =100 ;
var random = 0 ;
for (var  i= 0 ; i <= 50 ; i++)
{
var random= Math.floor(Math.random() * (max - min +1)) + min;
numbers.push(random)
console.log( random) 
}
console.log(numbers)
var somme = 0 ;
for (var i = 0; i < numbers.length; i++ )
{
somme =somme+ numbers[i];
}
console.log(somme)


//02 - Max

var numbers = [];
var min = 50 ;
var max =200 ;
var random = 0;
for (var  i = 0;  i <= 50 ; i ++)
{
    var random= Math.floor(Math.random() * (max - min +1)) + min;
    numbers.push(random)
    console.log( random) 
}
console.log(numbers)
var maximum = 0
for (var  i = 0 ; i <= numbers.length; i ++ )
{
    if (maximum < numbers [i]) //ici j' fais si mon nombre maximum est inferieur au nombre de  mon tableau 
    {
        maximum = numbers[i];// le nombre  maximum prends la valeur de nombre de mon tableau 
    }
}
console.log(maximum)



//03 - Unique
var numbers = [];
var min = 50 ;
var max =200 ;
var random = 0;
for (var  i = 0;  i <= 50 ; i ++)
{
    var random= Math.floor(Math.random() * (max - min +1)) + min;
    numbers.push(random)
    console.log( random) 
}


console.table(numbers)
var  newNumbers = 0
while (!(newNumbers >= 75 && newNumbers <= 100))
{
    newNumbers = numbers.shift();
}
console.log(newNumbers)


//04 - Nested Loop
var words= ["hello", "goodbye", "yes", "no", "stop", "go go go"]
var lettre = [];
var resultat= 0;


for (var i = 0; i <= words.length - 1; i++)
{
    lettre =  words[i].split(" ").join("").split("")
    console.log(lettre)
    for (var j = 0; j <= lettre.length - 1; j++) 
    {
        if ( lettre[j]== "o")
        {
            resultat= resultat+1
        }
    }
}
console.log(resultat)