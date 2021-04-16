//01 - Array
var fruits= ["mango","lemon","blueberry"];
console.log(fruits); 
console.table(fruits);


//02 - Access
var ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));


//03 - Add and Remove
var objects = ["pen","book","lamp"];
objects.unshift("chair");
console.table(objects);

objects.pop("lamp");
console.table(objects);

objects.push("laptop");
console.table(objects);

objects.shift("chair");
console.table(objects);



//04 - Reverse & Sort
var numbers =["4", "10","8", "12" ,"6"];
numbers.sort((a, b) => b - a);
console.table(numbers);

numbers.sort((a, b) => a - b);
console.table(numbers);


//05 - Boucle
var total = 0;
var limit = 10;
for ( var i=0 ; i <= limit; i++)
{
    total=total+i;
    console.log(total);
}


//06 - Reverse
var sentence = "Hello Konexio!";

console.log(sentence.length);
var resultat2="";

for(var i = sentence.length -1 ;i >= 0 ; i--)
{

    resultat2 += sentence.charAt(i);

}
console.log(resultat2);



//07
for ( var i = 0 ; i < 100;  i++ )
{
    if(i % 3 === 0)
    {
        console.log("fizz")
    }
    else if (i % 5=== 0)
    {
        console.log("buzz") 
    }
    else if (i % 3 === 0  && i % 5 === 0 )
    {
        console.log("fizzbuzz") 
    }
    else if (i % 7 === 0)
    {
        continue;
    }
    else
     {
        console.log(i) 
     }
}


// bonus
var total = 0;
var limit = 10;
while ( i<= limit)
{
    total=total+ i++  ;
}
console.log(total);

