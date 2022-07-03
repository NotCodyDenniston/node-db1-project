const router = require('express').Router()
const {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload
} = require('./accounts-middleware')

const Accounts = require('./accounts-model')

router.get('/', (req, res, next) => {
  Accounts.getAll()
  .then(accounts => {
    res.json(accounts)
  })
  .catch(err => {
    res.status(500).json({
      message: 'error retrieving accounts'
    })
  })
})

router.get('/:id', checkAccountId, (req, res, next) => {
  Accounts.getById(req.params.id)
  .then(account => {
      res.json(account)
  })
  .catch(err => {
      res.status(500).json({
          message: "error retrieving account"
      })
  })
})

router.post('/', checkAccountNameUnique, checkAccountPayload, (req, res) => {
  // DO YOUR MAGIC
})

router.put('/:id',
 checkAccountId,
  checkAccountNameUnique,
   checkAccountPayload,
    (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', checkAccountId, (req, res, next) => {
 Accounts.deleteById(req.params.id)
 .then(account => {
  res.json(account)
 })
 .catch(err => {
  res.status(500).json({
      message: "error deleting account"
  })
})
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
