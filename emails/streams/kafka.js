const { Kafka } = require('kafkajs')

//const brokerAddress = process.env.BROKER_SERVER_ADDRESS
//const offersTopic = process.env.OFFERS_TOPIC
const kafka = new Kafka({
    clientId: "email-consumer",
    brokers: ["broker:29092"]
})

const consumer = kafka.consumer({groupId: 'mailer-consumers'})


const startOffersConsumer = async (handler) => {
    await consumer.connect()
    await consumer.subscribe({topics: ['offers']})
    consumer.run({
        eachMessage: async ({topic, partition, message, heartbeat, pause}) => handler(message)
    })
}



module.exports = {
    startOffersConsumer
}




