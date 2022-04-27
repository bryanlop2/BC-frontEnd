// most frequent item

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const mostFrequenItem = array => array.reduce((acum, el, i, array) => {
        const contador=array.filter(e => e==el).length;
        return contador > acum[1] ? [el, contador] : acum;
    }, ["", 0]
)

console.log(mostFrequenItem(arr1));

// sum of squares

let arr2 = [0, 1, 2, 3, 4]

function sumOfSquares(array) {
    if(!array.every(ele => typeof ele == 'number')) {
        throw TypeError('All of the elements must be a numbers')
    }
    return array.map(n => Math.pow(n, 2)).reduce((acum, square) => (acum += square, acum), 0);
}

console.log(sumOfSquares(arr2));

// remove elements from an array

let arr3 = [NaN, 0, 15, false, -22, '', undefined, 47, null]
let removeItems = [NaN, 0, false, '', undefined, null]

let greater2 = arr3.filter(item => !removeItems.includes(item))

console.log(greater2);