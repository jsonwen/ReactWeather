// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function(name){
//   console.log('foreach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jason'));

// var person = {
//   name: 'Jason',
//   greet: function () {
//       names.forEach((name) => {
//         console.log(this.name+' says hi to' + name);
//       });
//   }
// }
//
// person.greet();

function add(a,b) {
  return a+b;
}

console.log(add(1,3));
console.log(add(9,0));

var first = (a,b) => a+b;
console.log('first',first(1,3));

var second = (a,b) => {
  return a+b;
}
console.log('second', second(9,0));
