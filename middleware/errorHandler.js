const { constants } = require("../constants.js");

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode: 500;

    switch(statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation failed!", message: err.message, stackTract: err.stack });
            break;

        case constants.UNAUTHORISED:
            res.json({ title: "Authorised failed!", message: err.message, stackTract: err.stack });
            break;
        
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden!", message: err.message, stackTract: err.stack });
            break;

        case constants.NOT_FOUND:
            res.json({ title: "Not found!", message: err.message, stackTract: err.stack });
            break;

        case constants.SERVER_ERROR:
            res.json({ title: "Server error!", message: err.message, stackTract: err.stack });
            break;

        default: 
            break;
    }
}

module.exports = errorHandler;