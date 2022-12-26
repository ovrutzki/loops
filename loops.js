
// // EX1
// // 1
// // let num = 0;
// // function oneToTen(num) {
// //     for (let i = 0; i < 10; i++) {
// //          num ++;
// //          console.log(num);
        
// //     }    
// // }
// // oneToTen(0);

// // 2
// function evenToTen (num){
//     for (let index = 0; index < 11; index += 2) {
//         num = index;
//         console.log(num);
        
//     }
// }
// evenToTen(0);

// // 3
// function evenUpTo (num){
//     for (let i = 2; i % 2 === 0 && i <= num; i += 2){
//         console.log(i);
         
//     }
// }
// evenUpTo(10)

// // 4
// let i = 0;
// while (i <= 20) {
//     i += 1;
//     if (i === 13) {
//         continue;  
//     }
//     console.log(i);
// }

// // 5
// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// // 6
// for (let i = 1; i < 11; i+=2) {
//     if (i === 7) {
//         break;
//     }
//     console.log('test' + i);
// };

// // 7
// const array1 = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
// function printArray(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
        
//     }
// }
// printArray(array1);

// // 8
// const array2 = [1,2,3,4,5,6,7,8,9]
// function printEvenNumbers(array){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 ===0) {
//             console.log('test2 : ' + array[i]);
//         }
        
//     }
//     }
//     printEvenNumbers(array2);

// //     const array2 = [1,2,3,4,5,6,7,8]
// // function printEvenNumbers(array){
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] % 2 !==0) {
// //             continue;
// //         }
// //         console.log('test- : ' + array[i]);
        
// //     }
// //     }
// //     printEvenNumbers(array2);

// // 9
// let ssuumm = 0
// function arraySum(array) {
//     for (let i = 0; i < array.length; i++) {
//         ssuumm = ssuumm + array[i];
//     }
//     console.log(ssuumm);
// }
// arraySum(array2)

// // 10
// function letterCounter(word){
//     let counter =0
//     for (let i = 0; i < word.length; i++) {
//         counter ++;
//     }
//     console.log(counter);
// }
// letterCounter('1234567890');

// // 11
// let even = [];
// let odd = [];
const messArray =  [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
// function sortArray (array){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             even.push(array[i])
//             console.log('even: ' + even);
//         } else {
//             odd.push(array[i])
//         }
//     }
// }
// sortArray(messArray);
// console.log(even);
// console.log(odd);
// 12

// function YYY(string) {
//     for (let i = 0; i < string.length ; i++) {
//         if (string[i] === 'y') {
//             console.log('Yes!');
//             return true;
//         }
//     }
//     console.log('no');
// };

// YYY('aerytu');

// function YYY(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === 'y') {
//             console.log('Yes!');
//         } else {
//             console.log('no..');
//     }
// }};

// YYY('aerytu');

// 13
// function largestNum(array) {
//    const max = Math.max(...array);
//     console.log(max);
// }

// largestNum(messArray);
// function largestNum(array) {
//     let largest = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i];
//         }         
//     }
//     console.log('largest: ' + largest);
// }

// largestNum(messArray);

// EX 2
// 1---------------------------------------
let fuelLevel = [];
let numOfAstronauts = [];
let altitude = [];

let i = 0;
function numbers() {
    while (i <= 10) {
        console.log(i);
        i ++;
    }
    
}
numbers()
// 2------------------------------------
// let i = 0;
// function even() {
//     while (i <= 10 && i % 2 ===0) {
//         console.log(i);
//         i += 2;
//     }
    
// }
// even()
// 3----------------------------
// let i = 1;
// function odd() {
//     while (i <= 10 && i % 2 !==0) {
//         console.log(i);
//         i += 2;
//     }
    
// }
// odd()
// 4-----------------
// let i = 10;
// function reverse() {
//     while (i >= 0 ) {
//         console.log(i);
//         i --;
//     }
    
// }
// reverse()
// 5-------------------------------------------------------------------------------------
// let userNum = prompt('Enter your number: ', 10);
// let i = 0;
// function counter(userNum) {
//         while (i <= userNum) {
//             console.log(i);
//             i ++;
//         } 
//     }

// counter(userNum)
// 6-------------------------------------------------------------------------------------
// let userNum = prompt('Enter your number: ', 10);
// let i = 0;
// let sum = 0;
// function counter(userNum) {
//         while (i <= userNum) {
//             sum += i;
//             i ++;
//         } 
//         console.log(sum);
//     }

// counter(userNum)

// 7-------------------------------------------------------------------------------------
// let userNum = prompt('Enter your number: ', 10);
// let i = 1;
// let factorial = 1;
// function counter(userNum) {
//         while (i <= userNum) {
//             factorial *= i;
//             i ++;
//         } 
//         console.log(factorial);
//     }

// counter(userNum)

// 8---------------------------------------------------------------

// let userNum = prompt('Starting fuel level:  ', 5000);
// function fuelLevel(userNum) {
//         while (userNum < 5000 || userNum > 30000) {
//             userNum = prompt('Try again: ');
//             if (userNum > 5000 && userNum < 30000){
//                 alert('Good');
//             }
//     }}
// fuelLevel(userNum)

// EX 3
// 1-------------------------------------

// function asterisk(num) {
//     let element = '';
//     for (let i = 0; i < num; i++) {
//        element += '*'
//         console.log(element);
//     }
// }

// asterisk(5);

// function asterisk(num) {
//     let element = '';
//     for (let i = 0; i < num; i++){
//         for (let j = 1; j < num; j++) {
//          element += '*';   
//          console.log(element); 
//         }
//     }
// }
// asterisk(3);

// 2------------------------------------------
// function multiplication() {
//     let row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let table;
//     for (let i = 0; i < row.length; i++) {
//         for (let j = 0; j < col.length; j++) {
//            table = row[i] * col[j];
//            console.log(table);
//         }
//     }
// }
// multiplication()

// Class
// let names = ['eran', 'maayan', 'dror'];
// function listMaker(array){
//     let makeList = '<ul>'
//     for (let i = 0; i < array.length; i++) {
//         makeList += `<li>${array[i]}</li>`;
        
//     }
//     makeList += '</ul>'
//     document.getElementById("list").outerHTML = makeList;
// }

// listMaker(names);

// // EX 4
// let fibonacciSequence = [0, 1];
// function fibonacci(array, limit){
//     for (let i = 0; i < limit - 2; i++) {
//         let element = array[i];
//         element = array[i] + array[i + 1];
//         fibonacciSequence.push(element);
//     }
//     console.log(fibonacciSequence)
// }
// fibonacci(fibonacciSequence, 11)

// function palindrome(string) {
//     let newString ="";
//     for (let i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//         if (string === newString) {
//             console.log(`the word: ${string} is palindrome`);
//             return true
//         }  
//     }
//     console.log(`the word: ${string} is NOT palindrome`);
// }

// palindrome('adsa');
