// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: Output: ["Delta", "2022"]
// b) Verify and explain: ['D', 'e', 'l', 't', 'a', ' ', '2', '0', '2', '2']
// The split method actually took each character in the string and all spaces and put them into separate strings into 1 array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Output: Hello, LEARN Student
// b) Verify and explain: This one caught me off guard, because the output was undefined. After playing around with the code, I realized the return statement wasn't put in there. I tested it below and was able to get the correct output: "Hello, LEARN Student"

const greeter2 = (name) => {
  return `Hello, ${name}!`
}

console.log(greeter2("LEARN Student")) // Output: Hello, LEARN Student!



// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Output: [ 8, 10, 12, 14, 16 ]. My assumption was correct, because the .map function goes through each index/value in the multBy2 array and multiplies it by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: Output: [ 11, 13, 15 ]. Similar to the above question/answer, the .filter method only outputs the index/values that are odd numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: ["JavaScript"]
// b) Verify and explain: Output: JavaScript. I thought it would output in an array, but it was just the word/value itself without the brackets. The object myCodingSkills used the .languages and takes the index 0, which was JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: { this.name = "George", this.cohort = "Bravo", this.year = 2022 }
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 }
//    The output was pretty close to what I had expected, but the formatting was off. However, the output information was still the same and was "George", "Bravo", and 2022.
