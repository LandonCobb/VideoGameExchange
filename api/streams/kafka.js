const { Kafka } = require('kafkajs')
const apiDoc = require('../api-doc')

//const brokerAddress = process.env.BROKER_SERVER_ADDRESS
//const offersTopic = process.env.OFFERS_TOPIC
const kafka = new Kafka({
    clientId: "vgexchange_api",
    brokers: ["broker:29092"]
})

const producer = kafka.producer()

const ProduceOfferMessage = async (offerEvent, offer) => {
    await producer.connect()
    await producer.send({
        topic: "offers",
        messages: [
            {
                key: offerEvent, 
                value: JSON.stringify(offer)
            }
        ]
    })
}

module.exports = {
    ProduceOfferMessage
}




