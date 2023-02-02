//Zadatak 1. 

var array1 = ["Pera","Mika","Zika"];
array1.push("Gile");
array1.shift();
array1.pop();
console.log(array1);


//Zadatak 2. 

var object = {
    gde: "Vivify Academy",
    sta: "Zavrsni rad",
    Ko: "Menu Ekpia"}
    
    object.kada = "02.02.2023";
    console.log(object);

//Zadatak 3.

var complexArray = [
    'nizovima',
    {
        key1: 'pristupamo',
        key2: 'ispisati',
        nizUnutarObjekta: ['vezbamo', 'cuvamo']
    },
    {
        key1: 'objektima',
        key2: 'podacima'
    },
    'nacin'
];
   console.log("Zadatak u kojem "
   + complexArray[1].nizUnutarObjekta[0] 
   + " kako da "+complexArray[1].key1 
   + " podacima sacuvanim u " +complexArray[0] 
   + " i " 
   + complexArray[2].key1 
   + ". Na ovaj " 
   + complexArray[3] 
   + " omogucavamo da odredjeni string mozemo " 
   + complexArray[1].key2 
   + " sa razlicitim "
   + complexArray[2].key2 
   + ", u zavisnosti koje vrednosti " 
   + complexArray[1].nizUnutarObjekta[1] 
   + " u nizu i/ili objektu.")

   //Zadatak 4.
var i = 1;
for ( i = 1 ; i<=100 ; i++) {
    
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if (i%3===0) {
        console.log("Fizz");
    }
    else if (i%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//Zadatak 5.

var arrNumber = [2,5,9,7];

function zbirNiza (arrNumber){
    var zbir= 0
    for (let x of arrNumber){
    zbir +=x;
    }
    console.log(zbir)
}
