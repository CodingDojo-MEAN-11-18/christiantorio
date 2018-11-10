// Challenge 1

// var hello;
// console.log(hello);
// hello = 'world';

// produces undefined output

// Challenge 2

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// };

// output is magnet because it is within scope of the function

// Challenge 3

// var brendan = 'super cool';
// // function print() {
// brendan = 'only okay';
// console.log(brendan);
// }
// console.log(brendan);

// output is super cool since it is referring to the global var

// Challenge 4

// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// will output chicken and half chicken. chicken is is initialized globally. food defines half chicken in the function which will then be shown on the console

// Challenge 5

// var mean = function () {
//     food = 'chicken';
//     console.log(food);
//     var food = 'fish';
//     console.log(food);
// }

// mean();
// console.log(food);

// will output mean is not a function. will need to move calling the mean function below since it is initialized as mean and remove console.log(food) above the function since it is not referencing anything

// Challenge 6

// // console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// genre = "rock";
// console.log(genre);
// var genre = "r&b";
// console.log(genre);
// }
// console.log(genre);

// first console.log cannot reference the function below. since genre is a global var it will print on last console.log line. rock and r&b will be shown first

// Challenge 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// dojo = "seattle";
// console.log(dojo);
// var dojo = "burbank";
// console.log(dojo);
// }
// console.log(dojo);

// san jose will display first then seattle and burbank. since dojo is called again. san jose will show again last

// Challenge 8

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }

// will produce error since dojo array is const