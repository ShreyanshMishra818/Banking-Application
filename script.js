'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   passengerNum = 1,
//   prize = 199 * passengerNum
// ) {
//   // ES5
//   //   passengerNum = passengerNum || 1;
//   //   prize = prize || 199;
//   const booking = {
//     flightNum,
//     passengerNum,
//     prize,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('FH333');
// createBooking('FH333', 1, 300);
// createBooking('FH333', 2);
// createBooking('FH333', undefined, 500);

// const flight = 'LH234';
// const passenger = {
//   name: 'Shreyansh Mishra',
//   passport: 123456723,
// };

// const checkIn = function (flight, passenger) {
//   flight = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
// };
// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transform = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed By:${fn.name}`);
// };
// transform('Javascript is fun', oneWord);
// transform('JavaScript is fun', upperWord);

// const high = function () {
//   console.log('You clicked😒😒');
// };
// document.body.addEventListener('click', high);
// ['Shreyansh', 'Kanika', 'Love'].forEach(high);
// const greet = function (hey) {
//   return function (name) {
//     console.log(`${hey} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Shryeaansh');
// greet('Shryeansh')('kanika');

// const flightDetails = {
//   airline: 'Air-India',
//   iataCode: 'AAZ7',
//   booking: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} Flight ${flightNum}${this.iataCode}`
//     );
//     this.booking.push({
//       flight: this.airline,
//       code: this.iataCode,
//       names: name,
//     });
//   },
// };
// flightDetails.book(118, 'Shreyansh');

// const book = flightDetails.book;

// const indigo = {
//   airline: 'Indigo',
//   iataCode: 'AAZ8',
//   booking: [],
// };
// //book.call(indigo, 188, 'Kanika');
// const bindBook = book.bind(indigo, 23);
// bindBook('SSSS');
// console.log(indigo, flightDetails);

// indigo.planes = 300;

// const buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document.querySelector('.buy').addEventListener('click', buyPlane.bind(indigo));

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// const registerNewAnswer = function () {
//   const value = Number(
//     prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     )
//   );
//   typeof value === 'number' &&
//     value < this.answers.length &&
//     this.answers[value]++;
//   displayResults();
//   displayResults('string');
// };
// const displayResults = function (type = 'array') {
//   if (type === 'string') {
//     console.log(`Poll results are ${[...poll.answers]}`);
//   } else {
//     console.log(poll.answers);
//   }
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', registerNewAnswer.bind(poll));
// (function () {
//   console.log('yoyo');
// })();

// (() => console.log('yoyoyo'))();

// const passengerBookings = function () {
//   let booking = 0;

//   return function () {
//     booking++;
//     console.log(`the booking are ${booking}`);
//   };
// };

// const book = passengerBookings();
// book();
// book();
// book();
// console.d

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
