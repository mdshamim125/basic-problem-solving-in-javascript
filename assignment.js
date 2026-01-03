//Problem: Array Filtering and Mapping

const people = [
  { name: "Shamim", age: 22, gender: "male" },
  { name: "Ayesha", age: 21, gender: "female" },
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Nusrat", age: 23, gender: "female" },
];

function getMaleNames(persons) {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

const result = getMaleNames(people);
console.log(result);

//Problem: Object Manipulation
const books = [
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don’t Know JS", author: "Kyle Simpson", year: 2015 },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018 },
];

function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

const result2 = getBookTitles(books);
console.log(result2);

//Problem: Function Composition
function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composedFunction(num) {
  const squared = square(num);
  const doubled = double(squared);
  return addFive(doubled);
}

const result3 = composedFunction(3);
console.log(result3);

//Problem: Sorting Objects (Cars)

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2021 },
  { make: "Ford", model: "Mustang", year: 2010 },
];

function sortCarsByYear(carArray) {
  return carArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

//Problem: Find And Modify
const people2 = [
  { name: "Shamim", age: 22 },
  { name: "Abdur Rahim", age: 25 },
  { name: "Abdul Karim", age: 30 },
];
function updateAgeByName(personArray, personName, newAge) {
  const person = personArray.find((p) => p.name === personName);

  if (person) {
    person.age = newAge;
  } else {
    console.log("Person not found");
  }

  return personArray;
}

const updatedPeople = updateAgeByName(people2, "Shamim", 25);
console.log(updatedPeople);

//Problem: Array Reduction
const numbers = [10, 15, 20, 25, 30, 33, 40];

const sumEven = (arr) =>
  arr.reduce((sum, n) => (n % 2 === 0 ? sum + n : sum), 0);

console.log(sumEven(numbers));

//Problem: Leap Year Checker
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(isLeapYear(2024) ? "Leap Year" : "Not a Leap Year");
