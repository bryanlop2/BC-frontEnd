var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function checkPP() {
    return function (target, propertyKey, descriptor) {
        const newvalue = descriptor.value;
        descriptor.value = function () {
            if (this.ppAvailable < 1) {
                console.log(`Cannot use this move ${propertyKey} not enough PP`);
            }
            else {
                newvalue.apply(this, arguments);
                console.log(`Used move: ` + propertyKey);
            }
        };
    };
}
class Pokemon {
    constructor(name, ppAvailable) {
        this.ppAvailable = 1;
        this.name = name;
        this.ppAvailable = ppAvailable;
    }
    figth(move) {
        console.log(`${this.name} used ${move === null || move === void 0 ? void 0 : move.name}!`);
        this.ppAvailable -= 1;
    }
    calculateDamage(move) {
        return move.power;
    }
}
__decorate([
    checkPP()
], Pokemon.prototype, "figth", null);
const thunderbolt = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 1);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);
