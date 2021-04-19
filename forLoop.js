//01 - Somme des carrés

var resultat = 0;

for (var i =5 ; i <= 10 ; i ++)
{
    resultat = (i*i) + resultat ;
    
}
console.log(resultat);

//02-comptons
let comptage = 0;
for (var i= 100; i<=1000; i++)
{
    if(i % 7 === 0 )
    {

        comptage = comptage + 1;
        
    }

}

console.log(comptage);

//03 - Chanceux
let min = 1 ;
let max = 6 ;
var result = 0;

for ( var i = 0 ; i <= 20 ; i++)
{
    var test = Math.floor(Math.random() * (max - min + 1) + min);
   
    if (test >= 5)
    {
        result  = test + result;
    }
    console.log(result);
}





