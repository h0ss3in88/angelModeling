const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const compression = require("compression");
const responseTime = require("response-time");
const errHandler = require("errorhandler");
require('dotenv').config();

const getApp = function () {
    let app = express();
    app.use(logger("dev"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(helmet());
    app.use(compression());
    app.use(responseTime());
    app.set('PORT', process.env.APP_PORT);
    app.use("/index", (req,res,next) => {
        return res.status(200).json({"message": "hello World"});
    });
    app.use(errHandler);

    return app;
};

module.exports = Object.assign({}, {getApp});