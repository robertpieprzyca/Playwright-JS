class ClassOfWarrior {
  constructor(x) {
    this.is_mage = x;
  }

  get magic() {
    if (this.is_mage == 1) {
      return "there is magic";
    } else {
      return "no magic";
    }
  }

  damage() {
    return console.log(7 + 7 + " " + this.magic);
  }
}

class ClassOfMage extends ClassOfWarrior {
  religion() {
    return console.log("Fener cult");
  }
}

let quick_ben = new ClassOfMage(1);

quick_ben.damage();

quick_ben.religion();
