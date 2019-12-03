// Algorithms

// Data Structures + Algorithms = Programs
// Class {} + function() = Programs

// Recursion: concept, not really algorithm
// used in sorting/searching (repeated sub tasks)
// common/most popular interview topic

// terminal command: ls -R (flag R = recursively) so list items recursively

// define something in terms of itself

// function that refers to iteself inside its function body

// every recursive function needs a base case (stopping point)

let counter = 0;
function inception(){
  console.log(counter)
  if (counter > 3) {
    return 'done!';
  }
  counter++;
  return inception();
}

//inception(); //return inner function's return statement === 'done!'

// 1. Identify base case
// 2. Identify recursive case
// 3. Get closer and closer and return when needed. Usually you have 2 returns for the base and recursive case

// Factorial
// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number-1);
} // O(n)

function findFactorialIterative(number) {
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
} // O(n)

// findFactorialIterative(5);
// findFactorialRecursive(5);

//----------------------------------------------

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
} // O(n)

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
} // O(2^n) --> that is horrible, but with dynamic programming it can become O(n)!

// fibonacciIterative(8);
// fibonacciRecursive(3);

//----------------------------------------------

//Recursion VS Iteration

// anything you do with recursion can be done iteratively (loop)

// (+) easier to write for some problems (DRY and more readable)
// (-) large stack (stack overflow/memory expensive)

// Tail Call Optimization: allows recursion to be called without increasing call stack === more memory efficient
//https://2ality.com/2015/06/tail-call-optimization.html

//----------------------------------------------

// When to use Recursion
// (+) complex problems, traversing trees
// (+) sorting through items

// using or converting data into a tree? Consider Recursion
// 1. main problem can be divided into a number of subproblems that are smaller instances of the same problem.
// 2. each instance of the subproblem is identical in nature
// 3. the solutions of each subproblem can be combined to solve the main problem
// Divide & Conquer using Recursion


//----------------------------------------------

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {

    if(array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString('yoyo master');

function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');

// Recursion: function that calls itself
// (+) ability to maintain state at different levels of recursion
// (-) stack overflow (added memory space)
// clever & costly
// (+) sorting
// (+) tree traversal
