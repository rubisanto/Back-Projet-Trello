const express = require('express')

const tasksController = require('./tasks.controller')

const tasksRouter = express.Router()

tasksRouter.get('/', tasksController.findAll)
tasksRouter.get('/:id', tasksController.findOne)
tasksRouter.post('/', tasksController.create)
tasksRouter.put('/:id', tasksController.update)

module.exports.tasksRouter = tasksRouter
