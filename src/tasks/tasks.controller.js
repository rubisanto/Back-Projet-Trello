const tasksService = require('./tasks.service')

async function findAll(_, res) {
  const tasks = await tasksService.findAll()
  res.send(tasks)
}

async function findOne(req, res) {
  const id = req.params.id
  try {
    const task = await tasksService.findOne(id)
    res.send(task)
  } catch (err) {
    res.status(404).send({ error: err.message, status: 404 })
  }
}

module.exports = {
  findAll,
  findOne,
}
