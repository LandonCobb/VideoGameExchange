const { GetGames, GetOneGame, CreateGame, UpdateGame, DeleteGame } = require("../../services/game-service")

module.exports = function () {
    let operations = {
        GET,
        POST
    }

    async function GET(req, res, next) {
        res.status(200).json(await GetGames())
    }


    async function POST(req, res, next) {
        const game = await CreateGame(req.body)
        res.status(201).json(game)
    }


    

    GET.apiDoc = {
        "summary": "get all video games",
        "description": "retrieves all video games and returns as an array of objects",
        "operationId": "get-games",
        "responses": {
            "200": {
                "description": "OK",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "title": {
                                    "type": "string"
                                },
                                "year": {
                                    "type": "integer"
                                },
                                "publisher": {
                                    "type": "string"
                                },
                                "system": {
                                    "type": "string"
                                },
                                "condition": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    POST.apiDoc = {
        "summary": "create single video game",
        "description": "creates a video game",
        "operationId": "create-game",
        "responses": {
            "200": {
                "description": "OK",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "title": {
                                    "type": "string"
                                },
                                "year": {
                                    "type": "integer"
                                },
                                "publisher": {
                                    "type": "string"
                                },
                                "system": {
                                    "type": "string"
                                },
                                "condition": {
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