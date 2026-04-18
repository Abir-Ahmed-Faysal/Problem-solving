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





function isPalindrome(str: string): boolean {

    let i = 0
    let j = str.length - 1


    while (i < j) {
        if (str[i] !== str[j]) {
            console.log("hit second condition");
            return false
        }

        i++
        j--
    }
    return true

}


// isPalindrome("faysal")

console.log(isPalindrome("madam"));






