type Move = {
  name: string,
  power: number
};

function checkPP(){
  return function (target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor){
    const newvalue = descriptor.value;
    descriptor.value = function() {
      if(this.ppAvailable <= 0){
        console.log(`Cannot use this move ${propertyKey} not enough PP`)
      }else{
        newvalue.apply(this, arguments)
        console.log(`Used move: ` + propertyKey)
      }
    }
  }
}

class Pokemon {
name: string;
ppAvailable = 1;
constructor(name: string, ppAvailable: number) {
  this.name = name;
  this.ppAvailable = ppAvailable;
}

@checkPP()
figth(move: Move) {
  console.log(`${this.name} used ${move?.name}!`);
  this.ppAvailable -= 1;
}

calculateDamage(move: any) {
  return move.power;
}
}

const thunderbolt: Move = {name: 'thunderbolt', power: 90};
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);