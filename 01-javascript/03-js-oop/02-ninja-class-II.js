function Ninja (name,health) {
  let speed = 3;
  let strength = 3;

  this.name = name;
  this.health = 100;

  function updateHealth () {
    console.log(this.health)
    health += 10;
  }

  this.showStats = function () {
    return ('Name: ' + this.name + ', Speed: ' + speed + ', Health: ' + this.health + ', Strength: ' + strength)
  }

  Ninja.prototype.kick = function (name) {
    if (name instanceof Ninja) {
      this.health -= 15 * strength;
      console.log(this.name + ' was kicked by ' + name.name + ' and lost ' +  this.health + ' health!');
    } else {
      return false;
    }
    return this;
  }
};

Ninja.prototype.sayName = function() {
  console.log ('My ninja name is ' + this.name);
}

Ninja.prototype.drinkSake = function () {
  this.health += 10;
  return this;
}

Ninja.prototype.punch = function (name) {
  if (name instanceof Ninja) {
    this.health -= 5;
    console.log(this.name + ' was punched by ' + name.name + ' and lost 5 health!');
  } else {
    return false;
  }
  return this;
}

var chris = new Ninja('Chris');
var ben = new Ninja('Ben');

chris.sayName();
ben.sayName();
chris.drinkSake().drinkSake();
ben.drinkSake();
ben.punch(chris);
ben.kick(chris);
console.log(chris.showStats());
console.log(ben.showStats());