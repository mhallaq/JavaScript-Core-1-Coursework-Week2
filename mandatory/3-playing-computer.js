/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
    Answer (1) because variable b is undefined 
  
  2. Remove the line that throws the error.
  
  3. What is printed to the console?
    Answer(3)   the output printed on the console is 
  2
  6
  4
  9
  6
  13
  8
  
  4. How many times is "f1" called? 
  Answer (4)  f1 called 2 times. 
  5. How many times is "f2" called?
  Answer(5) f2 called 3 times. 
  6. What value does the "a" parameter take in the first "f1" call?
  Answer (6) Value of the parameter "a" on the first Call is ----> 1
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  Answer(7) the value of the "a" outer variable is 8
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); /* 2 */
console.log(a); /* 6 */
// console.log(b); /* unidentified */

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}
