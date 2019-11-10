//given 2 arrays, create a function that let's a user know (t/f) whether these 2 arrays contain any common items
//example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

//2 parameters - arrays - no size limit
//return true or false

//how large will the arrays ever get?
//is time or space complexity more important?

//brute force/naive, nested for loop, will be O(a*b) not the most efficient. if the arrays are both the same size then it would be quadratic O(n^2). both are too slow!
//modulalize code, break it up into smaller problems/chunks, helper functions

function containsCommonItem(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        return true;
      }
    }
  }
  return false;
}
//O(a * b)
//O(1) - Space Complexity

//containsCommonItem(array1, array2)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// array1 ==> obj {
  //a: true,
  //b: true,
  //c: true,
  //x: true
//}
//array2[index] === obj.properties

function containsCommonItem2(arr1, arr2){
  //loop through first array and create object where properties === items in the array
  //can we assume always 2 parameters?
  //might not have time to code in tests, but talk about how you would check for edge cases
  //talk about improvements if you had more time (google specific methods for arrays)
  let map = {};
  for(let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item] = true;
    }
  }
  //loop through second array and check if items in second array exist in newly created object.
  for(let j = 0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return true;
    }
  }
  return false;
}
//O(a + b) Time Complexity is better
//O(a) Space Complexity
// => faster but more space used

containsCommonItem2(array1, array2)

//more readable and concise, including ES6 syntax

function containsCommonItem3(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)
