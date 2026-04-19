// // 1.
// // Reverse a String
// // Task: Write a function that takes a string and returns it reversed.

// // Input: string s
// // Output: string
// // Constraints: s.length <= 1000.
// // Edge Case: Single character strings or empty strings.
// // Hint: Look into built-in string slicing or a simple loop.



// const string = "faysal s"
// // input = faysal 
// // output = lasyaf

// // todo
// //split & take first 
// //while loop and looping form length last to first




// function reversed(strArg: string) {

//     const normalizeString = strArg.split(" ")

//     const targetString = normalizeString[0]


//     let terry = ""

//     let i = targetString.length - 1

//     console.log(i);

//     while (i >= 0) {
//         terry += targetString[i]
// console.log("i value decrement",i);
//         i--
//     }

//     return terry
// }



// console.log(reversed(string));


/*
2. FizzBuzz
Task: Print numbers from 1 to n. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

Input: integer n
Output: Printed lines or a list of strings.
Constraints: 1 <= n <= 100.
Edge Case: n = 1.
Hint: Use the modulo operator % to check for remainders.

*/



/*
input         
todo( )
write while loop 

else if condition or swtich for moduls condition 

else return number

return the 
*/




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



/*
3. Find the Largest Number in an Array
Task: Given an array of integers, return the largest value.

Input: int[] nums
Output: integer
Constraints: Array will have at least one element.
Edge Case: Array with all negative numbers.
Hint: Initialize a variable with the first element of the array.
*/



/* input [1,2,3,4,5,6,7,8,9]
output 9

*/

// function findLargest(arr: number[]) {



//     let max = arr[0]

//     console.log("outer side");
//     for (let i = 1; i <= arr.length - 1; i++) {
//         console.log(arr[i]);
//         if (arr[i] > max)
//             max = arr[i]
//     }

//     return max
// }

// console.log(findLargest([2, 4, 1, 5,3,10]));




/*
4. Check for Palindrome
Task: Determine if a word reads the same forward and backward.

Input: string s
Output: boolean
Constraints: Case-insensitive, ignore non-alphanumeric characters if you want a challenge.
Edge Case: "racecar" (true) vs "hello" (false).
Hint: Compare the string with its reverse.
*/





// function isPalindrome(str: string): boolean {

//     let i = 0
//     let j = str.length - 1


//     while (i < j) {
//         if (str[i] !== str[j]) {
//             console.log("hit second condition");
//             return false
//         }

//         i++
//         j--
//     }
//     return true

// }


// // isPalindrome("faysal")

// console.log(isPalindrome("madam"));








/*
5. Sum of Array Elements
Task: Calculate the total sum of all numbers in an array.

Input: int[] nums
Output: integer
Constraints: nums.length <= 500.
Edge Case: Empty array (should return 0).
Hint: Use an accumulator variable inside a loop.


*/



// following reverse method 
// function sumOfArray(arr: number[]): number {
//     let total = 0

//     for (let i = arr.length - 1; i >= 0; i--) {
//         total += arr[i]
//     }

//     return total
// }

// console.log(sumOfArray([1, 3, 5, 6, 7, 8, 9]));



/*

6. Count Vowels
Task: Count how many vowels (a, e, i, o, u) are in a given string.

Input: string s
Output: integer
Constraints: s contains English letters and spaces.
Edge Case: String with no vowels.
Hint: Iterate through the string and check if each character is in a "vowel" set.

*/



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



/*
7. Factorial Calculation
Task: Find the factorial of a non-negative integer n.

Input: integer n
Output: integer
Constraints: 0 <= n <= 12.
Edge Case: n = 0 (Factorial of 0 is 1).
Hint: Use a for-loop or recursion.

*/




// function factorial(n: number): number {
//     let result = 1;

//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(0));



/*
8. Even or Odd List
Task: Given an array of numbers, return a new array containing only the even numbers.

Input: int[] nums
Output: int[]
Constraints: nums.length <= 100.
Edge Case: Array with no even numbers.
Hint: Use the modulo operator inside a filter condition.


*/


// function evenNumberArray(num: number[]): number[] {

//     let evenArray: number[] = []

//     for (let i = 0; i <= num.length - 1; i++) {
//         if (num[i] % 2 === 0) {
//             evenArray.push(num[i])
//         }
//     }

//     return evenArray

// }

// console.log(evenNumberArray([1, 3, 2, 5, 6]));


/*
10. Find the Minimum in an Array
Task: Given an array of integers, return the smallest value.

Input: int[] nums
Output: integer
Constraints: Array will not be empty.
Edge Case: Multiple elements with the same minimum value.
Hint: Similar logic to finding the maximum.


*/


function minimumArr(arr: number[]): number {

    let min: number = arr[0]


    for (let i = 0; i < arr.length - 1; i++) {

        if (min > arr[i]) {
            min = arr[i]
        }
    }
    console.log(min);
    return min
}




minimumArr([1, 2, 3, 2, 6, 0, 9, 2, 1])