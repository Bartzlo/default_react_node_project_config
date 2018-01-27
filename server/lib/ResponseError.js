class ResponseError extends Error {
  constructor (details = {}) {
    super(details.text || 'Error without message')
    this.details = details
    this.status = details.status || ''
  }
}

module.exports = ResponseError
