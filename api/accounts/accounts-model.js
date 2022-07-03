const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts')
  .where('id', id)
  .first()
}

const create = account => {
  return db('accounts')
  .insert(account)
  .then(id => {
    return getById(id[0])
  })
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db('accounts')
  .where('id', id)
  .update(account)
  .then(rows => {
    return getById(id)
  })
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts')
  .where('id', id)
  .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
