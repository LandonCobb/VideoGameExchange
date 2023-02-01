const { GetUsers, CreateUser } = require("../../services/user-service")

module.exports = function () {
    let operations = {
        GET,
        POST
    }

    async function GET(req, res, next) {
        console.log("getting users")
        var users = await GetUsers()
        res.status(200).json(users)
    }

    async function POST(req, res, next) {
        const user = await CreateUser(req.body)
        res.status(201).json(user)
    }

    GET.apiDoc = {
        "summary": "get all users",
        "description": "retrieves all users and returns as an array of objects",
        "operationId": "get-users",
        "responses": {
            "200": {
                "description": "OK",
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
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
    }

    POST.apiDoc = {
        "summary": "create a user",
        "description": "creates a user able to access the website",
        "operationId": "register-user",
        "responses": {
            "201": {
                "description": "created",
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