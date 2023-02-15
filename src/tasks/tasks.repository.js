const { Pool } = require('../pool')

async function findAll() {
  const { rows } = await Pool.query('SELECT * FROM tasks')
  return rows
}

async function findOne(id) {
  const { rows } = await Pool.query('SELECT * FROM tasks WHERE id = $1', [id])
  return rows[0]
}

async function create(data) {
  const { title, category } = data
  const { rows } = await Pool.query(
    `INSERT INTO tasks(title, category) VALUES($1,$2) RETURNING *`,
    [title, category],
  )
  return rows[0]
}

async function update(id, data) {
  const { title, category } = data
  const { rows } = await Pool.query(
    `UPDATE tasks
     SET
         title=$1,
         category=$2
     WHERE id=$3
     RETURNING *
     `,
    [title, category, id],
  )
  return rows[0]
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
}
