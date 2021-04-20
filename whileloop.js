//  01 - Comptons
var total = 50 ; 
var limite =200 ;

while(total < limite)
{
    if (total % 2 === 0){
        console.log(total)
    }
  
    total++;
}

//02 - Try again
var min = 1;
var max = 6;
    var dice = null;
    var count = 0;

    while (dice !== 6){
        dice = Math.floor(Math.random() * (max - min + 1) + min);
        count++;
    }
console.log(`le nombre de fois : ${count}`);


//03 - Course
var ussainBolt = 0;
var tysonGay	= 0 ;
var min = 1;
var max = 10;

while (ussainBolt < 100 || tysonGay < 100 )

{

    var result1 = Math.floor(Math.random() * (max - min + 1) + min);
    var result2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += result1
    tysonGay +=  result1
    console.log(`Ussain Bolt : ${ussainBolt }`);
    console.log(`Tyson Gay  : ${tysonGay }`);
}
if (ussainBolt > tysonGay) {
    console.log("Le vainqueur est Ussain Bolt");
} else if (tysonGay > ussainBolt) {
    console.log("Le vainqueur est Tyson Gay");
} else {
    console.log("Egalité !");
}


//04 - Des boites
var box1 = 12
var box2 = 5;
while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}
//tant que le box1 est superieur au box2 

//box2 = 5  DONC  j'affiche  5

//box1 = box1 -10 donc 12 -2 = 2

// box1=2  DONC    j'affiche     box1: 2

//  j'affiche box2: 5

//box1= box1-10  donc 2-10 = -8

//box1 = -8 DONC j'affiche box1: -8

// Box1 <0 DONC notre boucle s'arrete ici





//05 - Encore des boites
var i = 0;
var box1 = 7;
while (i > 0) {
    i++;
    console.log(box1 + i);
}
console.log(i);
console.log(box1);

//tant que i est superieur a 0 , on ajoute  1 a i , et on affiche box1+i
// i=0
//box1 + i = 7 + 0 = 7
// j'affiche  i = 0 
// j'affiche  box1 = 7
