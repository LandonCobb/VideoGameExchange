const { GetOneOffer, CreateOffer, UpdateOffers, DeleteOffer } = require("../../services/offer-service")

module.exports = function () {
    let operations = {
        GET,
        PUT,
        DELETE
    }

    async function GET(req, res, next) {
        res.status(200).json(await GetOneOffer(req.params.offerId))
    }

    async function PUT(req, res, next) {
        const offer = await UpdateOffers(req.params.offerId, req.body)
        res.status(204).json(offer)
    }

    async function DELETE(req, res, next) {
        res.status(200).json(await DeleteOffer(req.params.offerId))
    }

    GET.apiDoc = {
        "parameters": [
            {
                "name": "offerId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "get an offer",
        "description": "view an offer before responding to it",
        "operationId": "get-offer",
        "responses": {
            "200": {
                "description": "OK",
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

    PUT.apiDoc = {
        "parameters": [
            {
                "name": "offerId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "update an offer status",
        "description": "updates an offer's status and does neccessary updates to user's lists of games",
        "operationId": "patch-offer",
        "responses": {
            "204": {
                "description": "updated",
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

    DELETE.apiDoc = {
        "parameters": [
            {
                "name": "offerId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "delte an offer",
        "description": "deltes an offer after being declined or cancled",
        "operationId": "delete-offer",
        "responses": {
            "200": {
                "description": "OK",
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
