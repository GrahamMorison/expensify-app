// Object Destructuring

// const person = {
//   name: 'Graham',
//   age: 34,
//   location: {
//     city: 'Saint Pete',
//     temp: 76
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}. `);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // Penguin, default value Self-Published

// Array Destructuring

const address = ['951 Montrose', 'Saint Pete', 'Florida', '33703'];

const [, city, state = 'New York', zip] = address;

console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);