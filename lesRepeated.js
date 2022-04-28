let arr1 = [1,2,4,7,4,2,1]

let arrayResultado = arr1.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

let sortedArray = Object.keys(arrayResultado)

let result = sortedArray.pop()
console.log(result)