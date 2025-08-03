//Err class function
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = "failed";
    }
}

module.exports = ErrorResponse; 