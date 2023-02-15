const express = require('express')

const tasksController = require('./tasks.controller')

const tasksRouter = express.Router()

tasksRouter.get('/', tasksController.findAll)

module.exports.tasksRouter = tasksRouter
