// una promesa es un objeto que representa una terminacion o el fracaso de una 
// función asyncrona

// una promesa es un objeto devuelto 

function exitoCallBakc(result){
    console.log('Archivo de audio disponible en la URL' + result);
}

function fallocallBack(error) {
    console.log('Error generando archivo de audio' + error);
}

// las funciones llamadas con then, seran llamadas incluso despues del 
// exito o fracaso de la operación

// múltiples funciones callback pueden ser añadidas llamando a then
// varias veces, cada una e ejecuta seguida de la otra

// cada promesa representa la terminacion de otro paso asíncrono o no

// promise resolve hace referencia a una promesa resuelta 
// y promise reject hace referencia a una promesa rechazada


Promise.resolve()
.then(() => console.log("promise"))
.then(() => console.log("another promise"))
console.log(0); // retorna 0, promise, another promise 



let newPromise = Promise.resolve([1,2,3]);

newPromise.then(function(datoABuscar){
    console.log(datoABuscar[0]) // 1
})
.then(function(){
    console.log('otroDato')
})

// promises are one of the ways to deal with async operation in JS
// promise to be kept '.then()', promise not to be kept '.catch()'

// we use promises chaining

// new Pormise retorna un objeto del tipo promesa
// tiene 3 posibles estados; pending: undefined, fulfilled: value, rejected: error

const myPromise = new Promise((resolve, reject) => {
    let connection = true;
    if(connection){
        resolve('Connection established')
    }else{
        reject('Connection refused')
    }
})


let otherPromise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed')
    }
})

otherPromise.then((message) => {
    console.log('This is in then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})


let promise = Promise.resolve([1,2,3]);

promise.then(result => {
    let oneNumber = result[0];
    return oneNumber;
}).then(firstNumber => {
    console.log(firstNumber);
}).catch(error => {
    console.log(`Error: ${error}`)
})