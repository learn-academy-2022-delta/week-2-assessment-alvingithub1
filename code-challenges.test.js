// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// Canned code below for function tests
// describe("functionName", () => {
//   it("describes what my test and function does", () => {
//     expect(functionName("pass any params needed")).toEqual("Expect output")
//   })
// })

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// Psuedocode:

// 1. Create/declare a function called divisibleByThree
// 2. Pass a parameter called number. This number will be used in the function
// 3. Use an if statement if the number modulo 3 is strictly equal to zero
    // 3a. Use a return statement that the number is divisible by three
// 4. Otherwise, use an else statement
    // 4a. Then use a return statement that the number is not divisible by three


// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
    expect(divisibleByThree(15)).toEqual(15 + " is divisible by three")
    expect(divisibleByThree(0)).toEqual(0 + " is divisible by three")
    expect(divisibleByThree(-7)).toEqual(-7 + " is not divisible by three")
  })
})

// //     ReferenceError: divisibleByThree is not defined

const num1 = 15
// // Expected output: "15 is divisible by three"
const num2 = 0
// // Expected output: "0 is divisible by three"
const num3 = -7
// // Expected output: "-7 is not divisible by three"


// // b) Create the function that makes the test pass.

const divisibleByThree = (number) => {
    if(number % 3 === 0) {
        return number + " is divisible by three"
    } else {
        return number + " is not divisible by three"
    }
}

// Outcome:
//   divisibleByThree
// ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)
// Tests passed successfully and the function ran as expected.




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Psuedocode:
// 1. Create a function called arrayCapitalized
// 2. Pass in a parameter called array. This will be used for arrays that are passed into the function.
// 3. Return statement
// 4. Use .map function on the parameter, because the exact same number of values will be returned, but only the first letter of each word will be changed.
    // 4a. Use value & arrow function to iterate through each index of the array
    // 4b. Use the charAt(0).toUpperCase() function to make each string index of 0 uppercase
    // 4c. Use value.substring(1) to concatenate the rest of the word

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("arrayCapitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

  it("takes in an array of words and returns an array with all the words capitalized.", () => {
    expect(arrayCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(arrayCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// //     ReferenceError: arrayCapitalized is not defined


// // b) Create the function that makes the test pass.

const arrayCapitalized = (array) => {
    return array.map(value => value.charAt(0).toUpperCase() + value.substring(1))
}

// Outcome:
// arrayCapitalized
// ✓ takes in an array of words and returns an array with all the words capitalized. (2 ms)
// Tests passed successfully and the function ran as expected.




// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Psuedocode:

// I tried using higher order functions, using the .filter method, but gave me an error: TypeError: firstVowel.filter is not a function. I realized that .map/.filter can only be used in arrays. The question is asking about using a string input, so I changed my method to a basic for/if condition.

// 1. Declare a function firstVowel
// 2. Pass in a parameter called vowel. This will be used to import the string we are trying to find the index value of the first value.
// 3. Use a for loop to iterate each index of the string
// 4. Use an if statement if the index of the word contains a, e, i, o, u , then to return i, which is the index of the first vowel.


// // a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"

  it("takes in a string and logs the index of the first vowel.", () => {
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
  })
})

//     ReferenceError: firstVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.

const firstVowel = (vowel) => {
    for(let i=0; i<vowel.length; i++) {
        if(vowel[i] === "a" || 
           vowel[i] === "e" || 
           vowel[i] === "i" || 
           vowel[i] === "o" || 
           vowel[i] === "u") {
            return i
        }
    }
}

console.log(firstVowel(vowelTester1)) // Output: 1
console.log(firstVowel(vowelTester2)) // Output: 0
console.log(firstVowel(vowelTester3)) // Output: 2

// Outcome:
// firstVowel
// ✓ takes in a string and logs the index of the first vowel. (1 ms)
// Tests passed successfully and the function ran as expected.