const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gil', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const large = new Array(100).fill('nemo');

function findNemo(array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
      break; //added for efficiency
    }
  }
}

// findNemo(nemo); //O(n) --> Linear Time

const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo'){
      console.log('Found Nemo!')
    }
  })
}

const findNemo3 = array => {
  for (let fish of array) {
    if(fish === 'nemo'){
      console.log('Found Nemo!')
    }
  }
}

// findNemo2(nemo)
// findNemo3(nemo)

const boxes = [0, 1, 2, 3, 4, 5]

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

// logFirstTwoBoxes(boxes) // O(2)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true;  // O(n)
    a++; // O(n)
  }
  return a; // O(1)
} // 3 + n + n + n + n --> Big O(3+4n) = O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
} // 1 + 1 + 1 + n + n + n + n + n + 1 --> O(4+5n) = O(n)

function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(box){
    console.log(box)
  });

  boxes2.forEach(function(box){
    console.log(box)
  });
} // O(n + m) different terms for inputs

//Log all pairs of array
const stuff = [1,2,3,4,5];

function logAllPairs(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      console.log(array[i], array[j])
    }
  }
} //O(n * n) --> O(n^2)

// logAllPairs(stuff); O(n^2) Quadratic time

function printAllNThenPairSums(nums){
  console.log('these are the numbers:')
  nums.forEach(function(n){
    console.log(n);
  });

  console.log('and these are their sums:')
  nums.forEach(function(fN){
    nums.forEach(function(sN){
      console.log(fN+sN);
    });
  });
}

// printAllNThenPairSums([1,2,3,4,5]) // O(n + n^2) --> O(n^2)

function booo(n){
 for(let i = 0; i < n.length; i++){
    console.log('boo!');
 }
}

// booo([1,2,3]) // O(1)

function sayHiNTimes(n){
  let hiArray = []
   for(let i = 0; i < n; i++){
    hiArray[i] = 'hi';
 }
 return hiArray;
}

// sayHiNTimes(6); // O(n)

// Find first, find Nth...
const tweets = [{
  tweet: 'hi',
  date: 2012
  }, {
  tweet: 'my',
  date: 2014
  }, {
  tweet: 'love',
  date: 2018
  }]
// O(n^2) --> store data in new structure

'stringsdfajlkf'.length //Big O? depends on language
// in JS .length is built in, simple lookup, property of object ----> O(1)
