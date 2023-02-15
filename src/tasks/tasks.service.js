const tasksRepository = require('./tasks.repository')

async function findAll() {
  const tasks = await tasksRepository.findAll()
  return tasks
}

async function findOne(id) {
  const task = await tasksRepository.findOne(id)
  return task
}

async function create(data) {
  const task = await tasksRepository.create(data)
  return task
}

async function update(id, data) {
  const task = await tasksRepository.update(id, data)
  return task
}

async function remove(id) {
  const task = await tasksRepository.remove(id)
  return task
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
}
