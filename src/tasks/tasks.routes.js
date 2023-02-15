const express = require('express')
const { validateBody } = require('./middlewares/validate-body.middleware')

const tasksController = require('./tasks.controller')

const tasksRouter = express.Router()

tasksRouter.get('/', tasksController.findAll)
tasksRouter.get('/:id', tasksController.findOne)
tasksRouter.post('/', validateBody, tasksController.create)
tasksRouter.put('/:id', validateBody, tasksController.update)
tasksRouter.delete('/:id', tasksController.remove)

module.exports.tasksRouter = tasksRouter
