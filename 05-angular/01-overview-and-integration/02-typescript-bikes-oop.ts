// class Bike {
//   price: number;
//   speed: number;
//   miles: number;

//   constructor(price, speed, miles) {
//       this.price = price;
//       this.speed = speed;
//       this.miles = miles;
//   }

//   displayInfo() {
//       console.log(`${this.price} ${this.speed} ${this.miles}`)
//   }

//   ride() {
//       console.log('I am riding my bike')
//       this.miles += 10
//       return this
//   }

//   reverse() {
//   console.log('I am riding my bike backwards')
//       this.miles -= 5
//       return this
//   }
// }

// const bike1 = new Bike(1, 2 ,3);
// const bike2 = new Bike(4, 5, 6);
// const bike3 = new Bike(7, 8, 9);


// var Bike = /** @class */ (function () {
//   function Bike(price, speed, miles) {
//       this.price = price;
//       this.speed = speed;
//       this.miles = miles;
//   }
//   Bike.prototype.displayInfo = function () {
//       console.log(this.price + " " + this.speed + " " + this.miles);
//   };
//   Bike.prototype.ride = function () {
//       console.log('I am riding my bike');
//       this.miles += 10;
//       return this;
//   };
//   Bike.prototype.reverse = function () {
//       console.log('I am riding my bike backwards');
//       this.miles -= 5;
//       return this;
//   };
//   return Bike;
// }());
// var bike1 = new Bike(1, 2, 3);
// var bike2 = new Bike(4, 5, 6);
// var bike3 = new Bike(7, 8, 9);
