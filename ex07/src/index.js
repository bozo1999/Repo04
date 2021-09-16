function main(numOne, numTwo){
    //only change code below this line
    reminder = numOne % numTwo;
    //only change code above this line
    return reminder;
}

console.log(main(5,2)); 
console.log(main(15,4));
console.log(main(102,25)); //Change this line
module.exports = main;