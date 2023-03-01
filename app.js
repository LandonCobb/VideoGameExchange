var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { initialize } = require('express-openapi');
const swaggerUi = require("swagger-ui-express");
const { PORT } = require("./keys");

var indexRouter = require('./routes/index');

const expressPromBundle = require('express-prom-bundle');

var app = express();

const metricsMiddleware = expressPromBundle({
    includeMethod: true,
    includePath: true,
    includeStatusCode: true,
    includeUp: true,
    customLabels: {project_name: "vge_api", project_type: "api_service"},
    promClient: {
        collectDefaultMetrics: {}
    }
})

app.use(metricsMiddleware)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`listening on ${PORT}`))

initialize({
    app,
    apiDoc: require("./api/api-doc"),
    paths: "./api/paths"
})

app.use(
    "/api-documentation",
    swaggerUi.serve,
    swaggerUi.setup(null, {
        swaggerOptions: {
            url: "http://localhost:5069/api-docs"
        }
    })
)

module.exports = app;