// for (let i=6; i<=60;){
//     console.log(i)
//     i+=3

// }

// for (let i=0, st=''; i<=6;){
//     st+='#'
//     console.log(st)
//     i+=1

// }

// for (let x=0,y=[], st=''; x<=20;x++){
//     // x % 2 == 0 ? console.log(`${x}: Even`) : console.log(`${x}: Odd`);
//     y.push(x)
    // for (thing of y){
    //     if (x == thing) {continue};
    //     if (thing == 1) {continue};
    //     if (x % thing == 0){
    //         console.log("Prime")
    //         break;
    //     }
    // }

// }

// let a = 0
// y=[]
// while (y.length<21){
//     a+=1
//     y.push(a)
//     console.log(y);
//     if (y.length == 20){

//     }
    // for (y[a-1]) {
    //     if (a == thing) {continue};
    //     if (thing == 1) {continue};
    //     if ((a % thing == 0)){
    //         console.log(a) 
    //         console.log("Not Prime")
    //         break;
    // }
    // }
// }

function numbarray(length){ //returns array as long as argument
   let lengtharray = [];
   let a = 0;
   while (lengtharray.length<length){
        a+=1;
        lengtharray.push(a)
   }
   return lengtharray

}
// console.log(numbarray(20));

function isPrime(number){
    let arrayUpToPrime = numbarray(number-1) //for the array not to include prime itself
    arrayUpToPrime = arrayUpToPrime.splice(1,arrayUpToPrime.length) // for array to not include 1
    for (num of arrayUpToPrime){
        if (number % num == 0){
            return false
        }
    }
    return true
}

// console.log(isPrime(11))


function factorsOf(number){ //returns factors of number 
    let arrayUpToNumber = numbarray(number);
    let listOfFactors = []
    for (let num of arrayUpToNumber){
        if (number % num == 0){
           listOfFactors.push(num)
        }
    }
    return listOfFactors

}

// console.log(factorsOf(51));

// userInput = prompt("What number would you like to find factors for? :")

// console.log(typeof userInput);
// userInput = Number(userInput)
// console.log(typeof userInput);
// console.log(factorsOf(userInput))


// testArr = [1,2]
// newArr = testArr.concat()
// console.log(newArr)
// console.log(newArr == testArr);

// let newList = numbarray(20);
// let newList2 = newList.splice(1, newList.length)
// console.log(newList2);

let car = {
    color: ['blue','red'],
    year: 2002,
}

console.log(car["color"]);