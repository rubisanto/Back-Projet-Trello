const { Pool } = require('../pool')

async function findAll() {
  const { rows } = await Pool.query('SELECT * FROM tasks')
  return rows
}

async function findOne(id) {
  const { rows } = await Pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  return rows[0]
}

module.exports = {
  findAll,
  findOne,
}
