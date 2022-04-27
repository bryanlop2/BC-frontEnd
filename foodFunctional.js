//cookPrimal


let myArray = ['🐮', '🥔', '🐔', '🌽'];

function cookPrimal() {
    myArray.splice(myArray.indexOf('🐮', '🥔', '🐔', '🌽'), 4, '🥩', '🍟', '🍗', '🍿')
    return myArray
}

console.log(cookPrimal());

// find vegetarian

function vegetarian() {
    const resultVegatarian = myArray.includes('🍟' || '🍿')
    return resultVegatarian
}

console.log(vegetarian())

// find meet

function vegetarian() {
    const resultVegatarian = myArray.includes('🥩' || '🍗')
    return resultVegatarian
}

console.log(vegetarian())

// eat all the food

function eatAll(){
    myArray.splice(0, myArray.length);
    return '🤤'
}

console.log(eatAll());

// eat all with reduce

function eatWithReduce(){
    myArray.reduce((acc, array) => {
        if(!myArray.find('🥩' || '🍟' || '🍗' || '🍿')){
            acc.push(array);
        }
        if(acc.length == 0){
            return '🤤';
        }    
    }, []);
}

console.log(eatWithReduce());