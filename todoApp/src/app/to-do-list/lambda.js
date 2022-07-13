exports. handler = (event, context, callback) => {
    var result = event.value1 + event.value2;
    callback(null, result);
}

//asyncronas llaman inmediatamente devuelven un resultado, no espera que se calcule y devuelve el resultado
//es como un evento o invocacion de eventos


exports.handler = (event, context, callback) => {
    console.log('Recieved event. ', JSON.stringify(event, null, 2));

    console.log('name = ', event.name);

    let name = "";

    if("name" in event) {
        name = event[name];
    } else {
        name = 'World';
    }

    const greetings = 'Hello' + name + '!!';
    console.log(greetings);
    callback(null, greetings)
}