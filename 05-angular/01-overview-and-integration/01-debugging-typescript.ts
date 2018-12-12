var myString: any;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// I assigned the variable as any instead of string so that it can
// a number or string
myString = 9;


function sayHello(name: any){
  return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// I applied the same type as above: any
console.log(sayHello(9));

function fullName(firstName: string, lastName: string, middleName?: string){
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
//added the question mark to specify that middle name is optional
console.log(fullName("Jimbo", "Jones"));

interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student){
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// The variable for belt should be belts
console.log(graduate(jay));


class Ninja{
  fullName: string;
   constructor(
     public firstName: string,
     public lastName: string){
        this.fullName = ` ${firstName} ${lastName}`;
     }
  debug(){
     console.log("Console.log() is my friend.")
  }
}
// This is not making an instance of Ninja, for some reason:
//Added new and put two arguments to match the class
const shane = new Ninja("Shane", "Crosby");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing")

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
  return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
//removed curly brackets
// This is not showing me what I want:
console.log(square(4));
// This is not working:
//put the variables in parenthesis before assignment
var multiply = (x,y) => x * y;
// Nor is this working:
//Changed it as arrow functions
var math = (x, y) =>  x + y;
var product = (x,y) => x * y;
var difference = (x,y) => x-y;
var total = [increment, product, difference];

class Elephant {
  constructor(public age: number){}
  birthday = () => {
     this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
  console.log(`Babar's age is ${babar.age}.`)
  }, 2000)
// Why didn't babar's age change?
//Fix this by using an arrow function in the Elephant class.
