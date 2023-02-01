const { GetOneOffer, CreateOffer, UpdateOffers, DeleteOffer } = require("../../services/offer-service")

module.exports = function () {
    let operations = {
        POST
    }

    async function POST(req, res, next) {
        const offer = await CreateOffer(req.body)
        res.status(201).json(offer)
    }

    POST.apiDoc = {
        "summary": "create an offer",
        "description": "creates an offer using another user's id",
        "operationId": "send-offer",
        "responses": {
            "201": {
                "description": "created",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "offeredGames": {
                                    "type": "array"
                                },
                                "recievedGames": {
                                    "type": "array"
                                },
                                "offerStatus": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return operations
}