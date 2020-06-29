/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
const challenge = (n) => {
  console.log(`CHALLENGE ${n}`)
}
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i])
}
challenge(1);


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
for (let i = 0; i > grades.length - 1; i--) {
  console.log(grades[i]);
}
challenge(2);


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for (i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}
challenge(3);


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for (i = 0; i < mixedSignNumbers.length; i++) {
  if (mixedSignNumbers[i] % 2 === 0) {
    console.log(mixedSignNumbers[i]);
  }
}
challenge(4);


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
for (i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals.splice(2));
}
challenge(5);

// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(2);
fibonacciNumbers.push(30,40);
fibonacciNumbers;
challenge(6);


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const newArr = [1,2,3,4,5]
for(i = 0; i < newArr.length; i++) {
  console.log(newArr[i])
}
challenge(7);


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const newEmptyArr = [];
newEmptyArr.unshift('sharod','sharod','sharod','sharod','sharod')
newEmptyArr.push('sharod');
console.log(newEmptyArr);
challenge(8);

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
for (let i = 3; i < students.length; i++) {
console.log(students[i])
}
challenge(9);

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
const someStudents = [];
for(let i = 3; i <= 10; i++ ){
  someStudents.push(student[i])
}
//same as slicedStudents = students.slice(3,11); into a new array empty
challenge(10);
// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.
copyStudents = students.slice(3,11)
copyStudents;
challenge(11);

// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
challenge(12);

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
dinosaurs.join('*');
dinosaurs;
challenge(13);

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
dinosaurs.reverse();
dinosaurs;
challenge(14);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const thirdaries = primaries.concat(secondaries);
thirdaries;
challenge(15);
