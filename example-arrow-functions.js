var names = ['Pedro', 'Victor', 'Gabriel'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach(name => console.log(name));

// var returnMe = name => name + '!';

// console.log(returnMe('Caio'));

// var person = {
//   name: 'Caio',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// person.greet();

function add(a, b) {
  return a + b;
}

console.log(add(1, 3));

addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(1, 3));

addExpression = (a, b) => a + b;

console.log(addExpression(1, 3));



