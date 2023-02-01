// MongoDB connection and CRUD functions for users collection
const { MongoClient } = require('mongodb');
const { MONGO_URL: url } = require("../../keys")

const client = new MongoClient(url);

const dbName = "VideoGameExchange"

const GetUsers = async () => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    var users = await db.collection("users").find().toArray()
    console.log(users)
    return users
}

const GetOneUser = async (Id) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    var user = await db.collection("users").find({ userId: Id })
    return user
}

const CreateUser = async (userObj) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    var user = await db.collection("users").insertOne(userObj)
    return user
}

module.exports = {
    GetUsers,
    GetOneUser,
    CreateUser
}
