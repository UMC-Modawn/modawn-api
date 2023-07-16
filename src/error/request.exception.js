module.exports = class RequestException extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
