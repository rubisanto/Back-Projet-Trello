const tasksRepository = require('./tasks.repository')

async function findAll() {
  const tasks = await tasksRepository.findAll()
  return tasks
}

async function findOne(id) {
  const task = await tasksRepository.findOne(id)
  return task
}

module.exports = {
  findAll,
  findOne,
}
