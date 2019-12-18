// Algorithms: Dynamic Programming

// Dynamic Programming: It is just an optimization technique. a way to solve problems by breaking it down to smaller subproblems, then solve subproblems just once so if it occurs again we can get the answer faster the next times
// Do you have something you can cache? (then use DP)

// memoization --- cacheing - speed up programs in easily accessible box (store values to use later on) stores return value so if function is repeated, it can run faster (look up answer in hash) instead of redoing calculations.
// ex; backpack you take to school that holds your items needed to reuse throughout the day

function addTo80(n) {
  console.log('long time')
  return n + 80;
}


function memoizedAddTo80() {
  let cache = {};
  return function(n){
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  }
} // Time: O(2^n)

const memoized = memoizedAddTo80();

console.log(memoized(5))
console.log(memoized(5))

// Fibonacci & Dynamic Programming: is the function efficient? not really

let calculations = 0;
function fibonacci(n) {
  // calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

//fibonacci(15) => 1973 calculations... O(2^n)

//Fibonacci function can be as O(n) using memoization:
//Dynamic Programming = Divide & Conquer + Memoization
// 1. can be divided into subproblem
// 2. recursive solution
// 3. are there repetitive subproblems?
// 4. memoize (cache/store) subproblems

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    // calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
} // Time: O(n), increased Space/Memory

const fasterFib = fibonacciMaster();

console.log('DP', fasterFib(10))
console.log('we did', calculations) // 19 calculations

console.log('slow', fibonacci(10))
console.log('we did', calculations) // 177 calculations

function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i-2]+answer[i-1]);
  }
  return answer.pop();
} //bottom up, simplest solution and grow in complexity

console.log('DP2', fibonacciMaster2(10))
