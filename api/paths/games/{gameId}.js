const { GetOneGame, UpdateGame, DeleteGame } = require("../../services/game-service")

module.exports = function () {
    let operations = {
        GET,
        PUT,
        DELETE
    }

    async function GET(req, res, next) {
        res.status(200).json(await GetOneGame(req.params.gameId))
    }

    async function PUT(req, res, next) {
        res.status(204).json(await UpdateGame(req.params.gameId, req.body))
    }

    async function DELETE(req, res, next) {
        res.status(200).json(await DeleteGame(req.params.gameId))
    }

    GET.apiDoc = {
        "parameters": [
            {
                "name": "gameId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "get single video game",
        "description": "retrieves a video game and returns it",
        "operationId": "get-game",
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

    PUT.apiDoc = {
        "parameters": [
            {
                "name": "gameId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "update a video game",
        "description": "updates single values of a video game object or multiple values",
        "operationId": "patch-game",
        "responses": {
            "204": {
                "description": "updated",
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

    DELETE.apiDoc = {
        "parameters": [
            {
                "name": "gameId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "delete single video game",
        "description": "deltes a video game",
        "operationId": "delete-game",
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