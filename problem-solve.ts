// 1.
// Reverse a String
// Task: Write a function that takes a string and returns it reversed.

// Input: string s
// Output: string
// Constraints: s.length <= 1000.
// Edge Case: Single character strings or empty strings.
// Hint: Look into built-in string slicing or a simple loop.



const string = "faysal s"
// input = faysal 
// output = lasyaf

// todo
//split & take first 
//while loop and looping form length last to first




function reversed(strArg: string) {

    const normalizeString = strArg.split(" ")

    const targetString = normalizeString[0]


    let terry = ""

    let i = targetString.length - 1

    console.log(i);

    while (i >= 0) {
        terry += targetString[i]
console.log("i value decrement",i);
        i--
    }

    return terry
}



console.log(reversed(string));