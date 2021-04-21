
//01 - Alphabet

function sortLetters (phrase) {
    var tri =phrase.split('');
    console.log(tri);
    tri= tri.sort().join('');
    return tri;
    
}


console.log(sortLetters("konexio"));


//02 - XOXO

function countEach(string)
{
    var lettreX = 0;
    var lettreO =  0;
    var mot = string.split('');
    console.log(mot);
    for (var i = 0; i <= mot.length ; i++) 
    {
        if (mot [i] === "x")
        {
            lettreX ++;
        }
        else if (mot [i] === "o")
        {
            lettreO ++;
        }
        
    }
    if ( lettreX ===lettreO)
    {
        console.log ("is true ");
    }
    else 
     {
       console.log("is false");
     };
}
 countEach("xxxxxxoooooo");




 // 03 - Palindrome

 function checkPal(word) {    
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return console.log("Nope");
        }
    }
    return console.log ("Palindrome!");
   }

checkPal("racecar");
