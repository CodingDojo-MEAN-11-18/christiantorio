module.exports = function () {
  return {
    add: function (num1, num2) { 
      console.log('the sum is: ', num1 + num2);
    },
    multiply: function (num1, num2) {
      console.log('the answer is: ', num1 * num2);
    },
    square: function (num) {
      console.log('the square is: ', num * num);
    },
    random: function (min, max) {
      var random = Math.random() * (min-max) + max;
      console.log('A randum number between ' + min + ' and ' + max + ' = ' + random) ;
    }
  
}
};