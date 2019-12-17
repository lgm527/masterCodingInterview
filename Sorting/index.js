// Algorithms: Sorting

//Can use the built in sort method for small input
const letters = ['a','d','z','e','r','b'];
letters.sort();

//When inputs get larger... custom sorting algorithms are needed, lower cost & operations on their computers
//sort or pre-process to make meaningful

//Issue with .sort();
const basket = [2,65,34,2,1,7,8];
basket.sort(); //--> [ 1, 2, 2, 34, 65, 7, 8 ]
//JS sort method converts numbers to strings (and uses character code/unicode to sort)
//time and space complexity of the sort cannot be guaranteed as it is implementation dependent (For JS dependent on broswer)
//Fix:
basket.sort(function(a,b){
  return a - b;
})

const spanish = ['único', 'árbol', 'fútbol', 'cosas']
spanish.sort();
//Fix:
spanish.sort(function(a, b){
  return a.localeCompare(b);
})

//---------------------------------------

//Bubble Sort: elementary/simple sorting algorithm, bubbles up and swaps items next to each other
//Time: O(n^2) Space: O(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j+1]) {
        //Swap numbers
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
} // O(n^2)

bubbleSort(numbers);

//---------------------------------------

//Selection Sort: elementary/simple sorting algorithm, find smallest item and make it first (or sequential) item on list
//Time: O(n^2) Space: O(1)

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i+1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower than previous
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);

//---------------------------------------

// Insertion Sort: not most efficient, but cases where it is extremely fast. useful for when list is sorted/almost sorted. best case O(n) when sorted.
//When data set is small or nearly sorted, insertion sort is the best choice

//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //move num to first position
      array.unshift(array.splice(i,1)[0])
    } else {
      // only sort num smaller than num on left. part of insertion sort that makes it fast if the array is almost sorted.
      if (array[i] < array[i-1]) {
        //find where num should be inserted
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move num to right spot
            array.splice(j,0,array.splice(i,1)[0])
          }
        }
      }
    }
  }
}

insertionSort(numbers);


//---------------------------------------

//O(n^2) is cool, but you know what is cooler? --> O(n log n)
//Merge Sort & Quick Sort: use divide and conquer technique

//---------------------------------------

//Merge Sort: most efficient way to sort, highly complex. divide & conquer = uses recursion. although we have to compare everything once, we only have to compare local lists (not compare everything with everything). stable (equvilant elements will keep original order of data set) Time: O(n log n). Space: O(n).

//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge( mergeSort(left), mergeSort(right) )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)))
}

mergeSort(numbers);

// Stable VS Unstable Algorithms
// In the previous video, I mentioned the idea of Stable Algorithm, and how Merge Sort is a stable sort. What does that mean? Have a read through this stack overflow answer which is excellent. Sometimes, stable is a desired property when sorting:

let link = 'https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important'

//---------------------------------------

// Quick Sort: pivoting technique. on average -> fastest, but has very bad worst case scenario (risky)
// Time:
// worst case: O(n^2)
// average: O(n log n)
// Space:
// worst O(log n)

//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  const len = array.length;
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);

//---------------------------------------

//Which Sort is Best?

//Insertion: small input, or mostly sorted (little space, easy implementation)
//Bubble: never going to use -> low efficient, only for educational purposes
//Selection: never going to use -> low efficient, only for educational purposes
//Merge: fast and time always O(n log n), (not best for space/memory though)
//Quick: better than merge (time avg & space). most popular. downside = horrible worst case, risky

//---------------------------------------

//Heap Sort: Heapsort is a comparison-based sorting algorithm that uses a binary heap data structure. Like mergesort, heapsort has a running time of O(n\log n),O(nlogn), and like insertion sort, heapsort sorts in-place, so no extra space is needed during the sort.

// The binary heap data structure allows the heapsort algorithm to take advantage of the heap's heap properties and the heapsort algorithm makes use of the efficient running time for inserting to and deleting from the heap.

//The most direct competitor of quicksort is heapsort. Heapsort is typically somewhat slower than quicksort, but the worst-case running time is always Θ(nlogn). Quicksort is usually faster, though there remains the chance of worst case performance except in the introsort variant, which switches to heapsort when a bad case is detected. If it is known in advance that heapsort is going to be necessary, using it directly will be faster than waiting for introsort to switch to it.

//---------------------------------------

// Can we beat O(n log n)?

// Comparison Sorts (Bubble, Insertion, Selection, Merge, Quick)
// Non-Comparison Sorts (Counting, Radix) -> only useful for fixed length integers

// Radix Sort: https://brilliant.org/wiki/radix-sort/
// Radix Sort Animation: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

// Counting Sort: https://brilliant.org/wiki/counting-sort/
// Counting Sort Animation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html

//---------------------------------------

//Sorting Interview

//#1 - Sort 10 schools around your house by distance: Insertion (small data set: fast and easy)

//#2 - eBay sorts listings by the current Bid amount: Radix or Counting (fast for fixed integers)

//#3 - Sport scores on ESPN: Quick (most efficient, better space complexity)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Merge (no matter what, O(n log n)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion (nearly sorted - really efficient)

//#6 - Temperature Records for the past 50 years in Canada: Radix or Counting (if they are whole integers), if they are more complex data types -> Quick sort

//#7 - Large user name database needs to be sorted. Data is very random: Merge (if we have enough memory) or Quick (not worried about worst case, data is not too large)

//#8 - You want to teach sorting for the first time: Bubble or Selection

// JS .sort() ... different broswers that have different JS engines implement the built in sort function
// mozilla: merge sort
// chorome (V8): quick and insertion sort

// Quick sort is great
// Merge sort is safe bet, and is stable
