class Cat {
    constructor(hunger = 5, loneliness = 5, tiredness = 5){
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.tiredness = tiredness;
    }

    get status() {
        return 'Your cat status: \n' + 'hunger: ' + 
        this.hunger + ' loneliness: ' + 
        this.loneliness + ' tiredness: ' + 
        this.tiredness; 
    }

    get needs() {
        if(this.hunger < 3){
            return 'It is really needed to feed the cat'
        }else if(this.loneliness < 3){
            return 'It is really needed to have time with the cat'
        }else if(this.tiredness < 3){
            return 'Your cat need to rest'
        }else{
            return 'Your cat is fine'
        }
    }

    feedCat(){
        if(this.hunger > 1){
            return this.hunger -= 1;
        }else{ 
            return 'Your cat is full of food'
        }
    }

    giveSomeAttention(){
        if(this.loneliness > 1){
            return this.loneliness -= 1;
        }else{ 
            return 'Your cat is really happy'
        }
    }

    takeToBed(){
        if(this.hunger > 1){
            return this.hunger -= 1;
        }else{ 
            return 'Your cat is well rested'
        }
    }

    takeToWall() {
        if(this.tiredness < 10) {
            return this.tiredness += 1;
        }else{
            return 'Your cat is so tired, cant take a walk'
        }
    }

    leaveAlone() {
        if(this.loneliness < 10) {
            return this.loneliness += 1;
        }else{
            return 'Your cat is so tired, cant take a walk'
        }
    }

    dontFeed(){
        if(this.hunger < 10) {
            return this.hunger += 1;
        }else{
            return 'Your cat is so tired, cant take a walk'
        }
    }


}

const  simon = new Cat();

console.log(simon);
console.log(simon.feedCat());
console.log(simon.feedCat());
console.log(simon.feedCat());
console.log(simon.feedCat());
console.log(simon.feedCat());
console.log(simon.feedCat());
console.log(simon.status);
console.log(simon.needs);