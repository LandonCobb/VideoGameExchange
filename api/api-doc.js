// ./api/api-doc.js

const apiDoc = {
    openapi: "3.0.1",
    info: {
        title: "Video Game Exchange",
        description: "This API provides management of video games and users including CRUD functions, and offers between users and games",
        version: "1.1.0"
    },
    paths: {},
    components: {
        parameters: {
            gameId: {
                name: "gameId",
                in: "path",
                required: true,
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "string"
                        },
                        year: {
                            type: "integer"
                        },
                        publisher: {
                            type: "string"
                        },
                        system: {
                            type: "string"
                        },
                        condition: {
                            type: "string"
                        }
                    }
                }
            },
            userId: {
                name: "userId",
                in: "path",
                required: true,
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        },
                        email: {
                            type: "string"
                        },
                        address: {
                            type: "string"
                        }
                    }
                }
            },
            offerId: {
                name: "offerId",
                in: "path",
                required: true,
                schema: {
                    type: "object",
                    properties: {
                        offeredGames: {
                            type: "array"
                        },
                        recievedGames: {
                            type: "array"
                        },
                        offerStatus: {
                            "type": "string"
                        }
                    }
                }
            }
        },
        schemas: {
            game: {
                type: "object",
                properties: {
                    title: {
                        type: "string"
                    },
                    year: {
                        type: "integer"
                    },
                    publisher: {
                        type: "string"
                    },
                    system: {
                        type: "string"
                    },
                    condition: {
                        type: "string"
                    }
                }
            },
            user: {
                type: "object",
                properties: {
                    name: {
                        type: "string"
                    },
                    email: {
                        type: "string"
                    },
                    address: {
                        type: "string"
                    },
                    games: {
                        type: "array"
                    }
                }
            },
            offer: {
                type: "object",
                properties: {
                    offeredGames: {
                        type: "array"
                    },
                    recievedGames: {
                        type: "array"
                    },
                    offerStatus: {
                        "type": "string"
                    }
                }
            }
        }
    }
}

module.exports = apiDoc