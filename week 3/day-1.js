// Q1
// Use Map to increment all numbers in the array (arr) by 1

let arr = [1, 2, 3, 4, 5, 6];
let newArr = arr.map(function(item){
    return item + 1
})

console.assert(newArr === [2, 3, 4, 5, 6, 7]);

// Q2
// Use Filter to find all even numbers in an array
let arr = [1, 2, 3, 4, 5, 6];
let evenNums = arr.filter(function(item){
    if (item % 2 == 0) 
    return item
})

console.assert(evenNums === [2, 4, 6, 8]);

// Q3
// Use Filter to find strings that are longer than 3 letter in the array (arr2)
let animals = ["cow", "rabbit", "dog", "cat"];
let longerThanThree = animals.filter(function(item){
    if (item.length > 3) 
    return item
})

console.assert(longerThanThree === ["rabbit"]);

// Q4
// Use Filter to find strings that are longer than 3 letter in the array (arr2)
let animals = ["cow", "rabbit", "dog", "cat"];
let longerThanThree;

console.assert(longerThanThree === ["rabbit"]);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
