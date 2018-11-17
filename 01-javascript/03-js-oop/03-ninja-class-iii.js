class Ninja {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

  sayName () {
    console.log(`Your ninja name is: ${this.name}`);
  }

  showStats () {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
  }

  drinkSake () {
    this.health += 10;
    console.log('I am drinking sake!')
  }
}

class Sensei extends Ninja {
  constructor (name) {
    super(name);
    this.health = 200;
    this.speed = 10; 
    this.strength = 10;
    this.wisdom = 10;
  }

  sayName () {
    console.log(`Your sensei name is: ${this.name}`)
  }

  showStats () {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength} Wisdom: ${this.wisdom}`);
  }

  speakWisdom () {
    super.drinkSake();
    console.log('Karate training will make you strong and confident, but restraint will make you respected')
  }
} 

const newNinja = new Ninja("chris");
const newSensei = new Sensei("toph");
newNinja.sayName();
newNinja.showStats();
newNinja.drinkSake();
newNinja.showStats();
newSensei.sayName();
newSensei.showStats();
newSensei.speakWisdom();
newSensei.showStats();