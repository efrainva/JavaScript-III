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


// Principle 4

// code example for Explicit Binding