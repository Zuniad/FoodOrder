class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        // Optional: maintain proper stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}

const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        // Optional: include error stack in dev
        // stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};

module.exports = {ErrorHandler, errorMiddleware};




