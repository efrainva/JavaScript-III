/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding
console.log("hello")
// Principle 2

// code example for Implicit Binding
const human = {
  name:"tom",
  age:"24",
  info:function(){
    return `${this.name} is ${this.age}`;
  }
}
console.log(human.info());
// Principle 3

// code example for New Binding
function Person (name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function(){
  console.log(`say ${this.name} is ${this.age}`);
}

const efrain = new Person ("efrain","20");

console.log(efrain.talk());

// Principle 4

// code example for Explicit Binding

function info(name,age){
  return `${name} is ${age} but ${this.name} is ${this.age}`;
}

const attributes = ["mark", "30"]

console.log(info.call(human, ...attributes));