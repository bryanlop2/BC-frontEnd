// una promesa es un objeto que representa una terminacion o el fracaso de una 
// función asyncrona

// una promesa es un objeto devuelto 

function exitoCallBakc(result){
    console.log('Archivo de audio disponible en la URL' + result);
}

function fallocallBack(error) {
    console.log('Error generando archivo de audio' + error);
}

/*const promise = crearArchivoAudioAsync(audioConfig);
promise.then(exitoCallBakc, fallocallBack)

// las funciones llamadas con then, seran llamadas incluso despues del 
// exito o fracaso de la operación

// múltiples funciones callback pueden ser añadidas llamando a then
// varias veces, cada una e ejecuta seguida de la otra

const promesa = hazAlgo();
const promesa2 = promesa.then(exitoCallBakc, fallocallBack);

// cada promesa representa la terminacion de otro paso asíncrono o no

// promise resolve hace referencia a una promesa resuelta 
// y promise reject hace referencia a una promesa rechazada

Promise.resolve().then(func1).then(func2).then(func3)*/


Promise.resolve()
.then(() => console.log("promise"))
.then(() => console.log("another promise"))
console.log(0); // retorna 0, promise, another promise 



let ejemplo = Promise.resolve([1,2,3]);
ejemplo
.then(function(datoABuscar){
    console.log(datoABuscar[0]) // 1
})
.then(function(){
    console.log('otroDato')
})

// promises are one of the ways to deal with async operation in JS
// promise to be kept '.then()', promise not to be kept '.catch()'

// we use promises chaining


const myPromise = new Promise((resolve, reject) => {
    let connection = true;
    if(connection){
        resolve('Connection established')
    }else{
        reject('Connection refused')
    }
})

myPromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message)
});


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
    console.log('This is in the catch' + message);
})

