


// /*
// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.
// Input: string s
// Output: string
// Constraints: s.length <= 1000.
// Edge Case: Single character strings or empty strings.
// Hint: Look into built-in string slicing or a simple loop.
// */

// const string = "faysal s";

// function reversed(strArg: string) {
//     let terry = "";
//     let i = strArg.length - 1;

//     while (i >= 0) {
//         terry += strArg[i];
//         i--;
//     }

//     return terry;
// }

// reversed(string);


// /*
// 2. FizzBuzz
// Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
// Input: integer n
// Output: Printed lines or a list of strings.
// Constraints: 1 <= n <= 100.
// Edge Case: n = 1.
// Hint: Use the modulo operator % to check for remainders.
// */

// function FizzBuzz(n: number) {
//     let i = 1;

//     while (i <= n) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// FizzBuzz(20);


// /*
// 3. Find the Largest Number in an Array
// Task: Given an array of integers, return the largest value.
// Input: int[] nums
// Output: integer
// Constraints: Array will have at least one element.
// Edge Case: Array with all negative numbers.
// Hint: Initialize a variable with the first element of the array.
// */

// function findLargest(arr: number[]) {
//     let max = arr[0];

//     for (let i = 1; i <= arr.length - 1; i++) {
//         if (arr[i] > max)
//             max = arr[i];
//     }

//     return max;
// }

// findLargest([2, 4, 1, 5, 3, 10]);


// /*
// 4. Check for Palindrome
// Task: Determine if a word reads the same forward and backward.
// Input: string s
// Output: boolean
// */

// function isPalindrome(str: string): boolean {
//     let i = 0;
//     let j = str.length - 1;

//     while (i < j) {
//         if (str[i] !== str[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }

//     return true;
// }

// isPalindrome("madam");


// /*
// 5. Sum of Array Elements
// Task: Calculate the total sum of all numbers in an array.
// Input: int[] nums
// Output: integer
// */

// function sumOfArray(arr: number[]): number {
//     let total = 0;

//     for (let i = arr.length - 1; i >= 0; i--) {
//         total += arr[i];
//     }

//     return total;
// }

// sumOfArray([1, 3, 5, 6, 7, 8, 9]);


// /*
// 6. Count Vowels
// Task: Count how many vowels are in a given string.
// */

// function countVowels(str: string): number {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let total = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             total++;
//         }
//     }

//     return total;
// }


// /*
// 7. Factorial Calculation
// Task: Find factorial of n.
// */

// function factorial(n: number): number {
//     let result = 1;

//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

// factorial(0);


// /*
// 8. Even or Odd List
// Task: Return only even numbers from array.
// */

// function evenNumberArray(num: number[]): number[] {
//     let evenArray: number[] = [];

//     for (let i = 0; i <= num.length - 1; i++) {
//         if (num[i] % 2 === 0) {
//             evenArray.push(num[i]);
//         }
//     }

//     return evenArray;
// }

// evenNumberArray([1, 3, 2, 5, 6]);


// /*
// 10. Find the Minimum in an Array
// Task: Return smallest value.
// */

// function minimumArr(arr: number[]): number {
//     let min: number = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }

//     return min;
// }

// minimumArr([1, 2, 3, 2, 6, 0, 9, 2, 1]);


// /*
// 11. Multiplication Table
// Task: Generate multiplication table up to 10.
// */

// function multiplicationTable(n: number): string[] {
//     const output: string[] = [];

//     for (let i = 1; i <= 10; i++) {
//         output.push(`${n} x ${i} = ${i * n}`);
//     }

//     return output;
// }

// multiplicationTable(1);


// 13. Remove Duplicates from a List
// Task: Given an array, return a new array with duplicate values removed.

// Input: int[] nums
// Output: int[]
// Constraints: Order of elements should be preserved.
// Edge Case: Array where all elements are the same.
// Hint: Use a "Set" data structure or check if an element is already in the result list.




// function uniqueArr(arr: number[]): number[] {
//   const newSet = new Set(arr);
//   const valuePair = newSet.entries();

//   let cleanArr: number[] = [];

//   for (const [_, value] of valuePair) {
//     cleanArr.push(value);
//   }

//   return cleanArr;
// }





/*
14. Convert Celsius to Fahrenheit
Task: Convert a temperature from Celsius to Fahrenheit.

Input: float celsius
Output: float
Constraints: Formula: (C * 9/5) + 32.
Edge Case: Negative temperatures.
Hint: Basic arithmetic operation.
*/



function celToFrConverter(celsius: number): number {


    return (celsius * 1.8) + 32    ///for 9/5=1.8
}



/*
15. Count Occurrences of a Character
Task: Given a string and a character, find how many times that character appears in the string.

Input: string s, char c
Output: integer
Constraints: Case-sensitive.
Edge Case: Character not present in the string.
Hint: Use a counter variable and loop through the string.


*/




function occurrencesOfChar(str: string, char: string): number {
    let result = 0

    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === char)
            result++
    }
    
    return result
}









