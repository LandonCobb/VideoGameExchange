const { GetOneUser } = require("../../services/user-service")

module.exports = function () {
    let operations = {
        GET
    }

    async function GET(req, res, next) {
        res.status(200).json(await GetOneUser(req.params.userId))
    }

    GET.apiDoc = {
        "parameters": [
            {
                "name": "userId",
                "in": "path",
                "required": true,
                "schema": {
                    "type": "integer",
                }
            }
        ],
        "summary": "get single user",
        "description": "retrieves a user and returns it as an object",
        "operationId": "get-user",
        "responses": {
            "200": {
                "description": "OK",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "address": {
                                    "type": "string"
                                },
                                "games": {
                                    "type": "array"
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