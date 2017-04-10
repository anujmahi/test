/**
 * Created by Mausham on 4/10/2017.
 */
module.exports = function TelemetryError(code, message) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.code = code;
};

require('util').inherits(module.exports, Error);