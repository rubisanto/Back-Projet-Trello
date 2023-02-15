const tasksRepository = require('./tasks.repository')

async function findAll() {
  const tasks = await tasksRepository.findAll()
  return tasks
}

module.exports = {
  findAll,
}
