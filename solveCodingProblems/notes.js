// How does JS Work?

// what is a program?
// allocate memory
// parse and execute (read and run commands)

// JS engine implemented by browser
// -memory heap (allocate memory)

// memory leak: unused memory fills up heap, global variables are bad since they fill up memory heap

// -call stack (read and run commands)

const one = () => {
  const two = () => {
    console.log('hi')
  }
}

// stack: calls one() then calls two() and console.logs 'hi', them remove the two() then remove the one() then the call stack is empty.

// single threaded language & non-blocking:
// one call stack only! (FILO)

// synchronous: execution line by line

// stackoverflow:  call stack overflows (recursion --> with no exit)

/* function foo() {
   foo();
 }
 foo(); */

// asynchronous: execution of following commands is not held up by previous commands still executing (has a callback();)
console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');

// JS Run-Time Environment: part of browser,
// CALL STACK
// WEB API (includes setTimeOut, DOM, ajax)
// CALLBACK QUEUE
// EVENT LOOP

//when is async happening? - often, during network requests, image processing..., etc.

// to not block the single thread, callbacks() are utilized
