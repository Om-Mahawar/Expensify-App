// const person = {
//   name: 'Om',
//   age: 20,
//   location: {
//     city: 'Sitapur',
//     temp: 10,
//   },
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${name} has age of ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`Its ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Sefl-Published' } = book.publisher;

// console.log(publisherName);

// @ts-check Array Destructuring

const address = ['125 Vijay Laxmi Nagar', 'Sitapur', 'UP', '261001'];

const [, city, state = 'Lucknow'] = address;

console.log(`Your are in ${city} ${state}`);
