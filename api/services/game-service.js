// MongoDB connection and CRUD functions for games collection
const { MongoClient } = require('mongodb');
const { MONGO_URL: url } = require("../../keys")

const client = new MongoClient(url);

const dbName = "VideoGameExchange"

const CreateGame = async (gameObj) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    const game = await db.collection("games").insertOne(gameObj)
    return game
}

const UpdateGame = async (Id, updatedGame) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const q = { gameId: Id }
    const result = await db.collection("games").updateOne(q, {$set: {title: updatedGame.title, year: updatedGame.year, publisher: updatedGame.publisher, system: updatedGame.system, condition: updatedGame.condition}})
    return result
}

const GetOneGame = async (Id) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    var game = await db.collection("games").find({ gameId: Id })
    return game
}

const GetGames = async () => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    var games = await db.collection("games").find().toArray()
    return games
}

const DeleteGame = async (Id) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    const result = await db.collection("games").deleteOne({ gameId: Id })
    return result
}

module.exports = {
    CreateGame,
    UpdateGame,
    GetOneGame,
    GetGames,
    DeleteGame
}
