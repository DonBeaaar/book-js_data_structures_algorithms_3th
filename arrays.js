const fibo = [];
fibo[1] = 1;
fibo[2] = 1;

for (let i = 3; i < 20; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

// for (let i = 1; i < fibo.length; i++) {
//     console.log(fibo[i])
// }

let numbers = [0,1,2,3,4]
// numbers.splice(1,3);
numbers.splice(5,0,5)
// console.log(numbers)

// let array3 = [];
// array3[0] = [];
// array3[0][0] = 1;
// array3[0][1] = 2;
// //pasamos a la otra dimension
// array3[1] = [];
// array3[1][0] = 3;
// array3[1][1] = 4;

// for (let i = 0; i < array3.length; i++) {
//     for (let j = 0; j < array3[i].length; j++) {
//         console.log(array3[i][j])
//     }
// }

// console.table(array3)

let array1 = [0];
let array2 = [2];

// let array3 = array1.concat(0,array2) // [0,1,2]
let array3 = [...array1,1,...array2]
// console.log(array3)



/** Iterators */
let numbersIterators = [0,1,2,5];

// Entries iterator
let entries = numbersIterators.entries();
// console.log(entries.next().value)
// console.log(entries.next().value)
// console.log(entries.next().value)
// console.log(entries.next().value)

// for (const n of entries) {
//     console.log(n)
// }

// Keys iterator
let keys = numbersIterators.keys();
// console.log(keys.next())



/** Custom sorting */


const friends = [
    {
        name: 'felipe', age: 22
    },
    {
        name: 'juana', age: 50
    },
    {
        name: 'franco', age: 12
    },
];

// Sorting number
console.log(friends.sort((a,b)=> a.age - b.age))

// Sorting strings
console.log(friends.sort((a,b)=> a.name.localeCompare(b.name)))