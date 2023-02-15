const tasksService = require('./tasks.service')

async function findAll(_, res) {
  const tasks = await tasksService.findAll()
  res.send(tasks)
}

module.exports = {
  findAll,
}
