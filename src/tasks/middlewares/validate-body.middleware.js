const { TaskSchema } = require('../tasks.schema')

function validateBody(req, res, next) {
  // enlever si un attribut en plus
  for (const attr in req.body) {
    if (!TaskSchema[attr]) {
      delete req.body[attr]
    }
  }

  const error = {
    errors: {},
    status: null,
  }

  for (const attr in TaskSchema) {
    if (!req.body[attr] || typeof req.body[attr] !== TaskSchema[attr]) {
      error.errors[
        attr
      ] = `${attr} cannot be empty or should be a ${TaskSchema[attr]}`
    }
  }

  const errorLength = Object.keys(error.errors).length
  if (errorLength) {
    error.status = 422
    return res.status(422).json(error)
  }

  next()
}

module.exports.validateBody = validateBody
