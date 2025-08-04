const globalErrHandler = (err, req, res, next) => {
    //status
    const status = err.status ? err.status : 'failed';
    //message
    const message = err.message;
    //stack
    const stack = err.stack;
    //statuscode
    const statusCode = err?.statusCode ? err.statusCode : 500;
    // send the response
    res.status(statusCode).json({
        status,
        message,
        stack,
    });

}

module.exports = globalErrHandler;