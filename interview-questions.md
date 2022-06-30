# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a variable that is only in the scope of a function and is not accessible within a global scope. An argument is when there is a need to change a variable from one state to another.

Researched answer: Parameters are variables listed as a part of function declaration. Arguments are values passed to the function when it is invoked. The difference between the two is the argument is the actual value and the parameters are just the names listed in the function’s definition.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map method takes in indexes, values, and arrays. Each of these parameters are used in order to provide logic and function to arrays. Only the indexes are required and the rest are optional.

Researched answer: The .map function uses the predefined parameters: current element/value, the index of the current element, and the whole array. The current element/value is required and the index and array arguments are optional.



3. What is the difference between map and filter?

Your answer: The map is used to compare and change the same amount of indexes in an array. A filter is used to compare, change, and add/delete to an array. The biggest difference is that a filter will use conditionals to return a different amount of indexes in an array. A map will return the same amount of indexes.


Researched answer: Both map and filter are higher order functions. The filter method creates a new array with array elements that pass a test implemented from the provided function. The map method also creates a new array with the results of calling every array element. The map method allows items to be manipulated when returned.



4. What is the difference between a function and a method?

Your answer: A function requires a return. A function can input parameter values to manipulate data using conditionals and iterating through the input. A method is similar to a function that can manipulate data and return an input.

Researched answer: A function and method are a set of instructions, but a method is associated with an object. Functions are like recipes and execute a set of instructions on data or variables and return the result. A method is similar in that it can perform a task, but the difference is a method is associated with an object and a function is not. Some examples of built-in methods are toLowerCase() and toUpperCase().



5. What is object destructuring?

Your answer: Object destructuring is taking nested key/value JSON
objects and breaking it apart. This allows the use of nested objects.

Researched answer: Destructuring allows the use to extract data from arrays, objects, and maps and set them into new variables. Destructuring allows to extract multiple properties from an array at a time.

An example of destructuring is a person property with a first name, last name, and age. You can use destructuring to only take the age out of the property and use it to compare the ages of every person.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: A way for one class to extend another class. The ‘extend’ keyword is used for a class to inherit from another class. Inheritance enables a class to take the functionality from a parent class and allows to add more. Inheritance is a useful feature that allows code reusability.

2. React: React is a JavaScript library created by Facebook. React is a user interface library and it is a tool for building UI components. React allows developers to create large web applications that can change data, without reloading the page.

3. React state: It is a built-in React object that is used to contain data or information about the component. Also, the state object is where you store property values that belong to the component. When the state object changes, the component re-renders.

4. React lifecycle methods: React has components that has a lifecycle that can be monitored using: mountain, updating, and unmounting. Mounting means putting elements into the DOM. Updating is when a component gets updated and there is a change in the component’s state
of props. Unmounting is when a component is removed from the DOM.

5. DOM: DOM stands for Document Object Model and represents the web page as a tree structure. The DOM enables JavaScript to access and modify the web page easily. React uses the virtual DOM which is like a copy of the actual DOM representation that is used to make updates and reflects in the original browser DOM when the changes are done.

