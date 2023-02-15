const { Pool } = require('../pool')

async function findAll() {
  const { rows } = await Pool.query('SELECT * FROM tasks')
  return rows
}

module.exports = {
  findAll,
}
