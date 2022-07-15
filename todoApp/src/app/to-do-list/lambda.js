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



const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDb.DocumentClient();

const params = {
    TableName: 'test-table',
}

async function createItem(id, price) {
    try {
        params.Item = {
            id: id,
            price: price,
        };
        await docClient.put(params).promise();
    } catch(err) {
        return err;
    }
}

exports.handler = async (event) => {
    try {
        await createItem(event.id, event.price);
        return { body: "Successfully created item!"};
    } catch (err) {
        return { error: err}
    }
}


const AWS = require('aws-sdk');
const docClient2 = new AWS.DynamoDb.DocumentClient();

const params2 = {
    TableName: 'test-table',
    Key: {
        id: "1",
    }
}

async function getItem(id, price) {
    try {
        const data = await docClient.get(params).promise();
        return data;
    } catch(err) {
        return err;
    }
}

exports.handler = async (event) => {
    try {
        const data = await getItem()
        return { body: JSON.stringify(data)};
    } catch (err) {
        return { error: err}
    }
}




const AWS = require('aws-sdk');
const docClient3 = new AWS.DynamoDb.DocumentClient();

const params3 = {
    TableName: 'test-table',
}

async function getItems(id, price) {
    try {
        const data = await docClient.scan(params).promise();
        return data;
    } catch(err) {
        return err;
    }
}

exports.handler = async (event) => {
    try {
        const data = await getItems()
        return { body: JSON.stringify(data)};
    } catch (err) {
        return { error: err}
    }
}


const AWS = require('aws-sdk');
const docClient4 = new AWS.DynamoDb.DocumentClient();

const params4 = {
    TableName: 'test-table',
    KeyConditionExpression: "#name = :value",
    ExpressionAttributeValues: { ":value": "12345"},
    ExpressionAttributeNames: { "#name": "id"}
}

async function queryItems() {
    try {
        const data = await docClient.query(params4).promise();
        return data;
    } catch(err) {
        return err;
    }
}

exports.handler = async (event) => {
    try {
        const data = await queryItems()
        return { body: JSON.stringify(data)};
    } catch (err) {
        return { error: err}
    }
}