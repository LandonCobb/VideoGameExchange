// MongoDB connection and CRUD functions for offers collection
const { MongoClient } = require('mongodb');

const { MONGO_URL: url } = require("../../keys")
const client = new MongoClient(url);

const dbName = "VideoGameExchange"

const CreateOffer = async (offerObj) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    const offer = await db.collection("offers").insertOne(offerObj)
    return offer
}

const UpdateOffers = async (Id, updatedOffer) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const q = { offerId: Id }
    const offer = await db.collection("offers").updateOne(q, {$set: {offeredGames: updatedOffer.offeredGames, recievedGames: updatedOffer.recievedGames, offerStatus: updatedOffer.offerStatus}})
    return offer
}

const GetOneOffer = async (Id) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    var offer = await db.collection("offers").find({ offerId: Id })
    return offer
}

const DeleteOffer = async (Id) => {
    await client.connect()
    console.log('Connected successfully to server')
    const db = client.db(dbName);
    const result = await db.collection("offers").deleteOne({ offerId: Id })
    return result
}

module.exports = {
    CreateOffer,
    UpdateOffers,
    GetOneOffer,
    DeleteOffer
}


