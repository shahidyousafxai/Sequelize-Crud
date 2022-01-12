const express = require('express')
const router = express.Router()
const db = require('../models')

// Get All the Details
router.get('/all', (req, res) => {
  db.Detail.findAll().then((detail) => res.send(detail))
})

// Get Details by ID
router.get('/find/:id', (req, res) => {
  db.Detail.findAll({
    where: {
      id: req.params.id,
    },
  }).then((Detail) => res.send(Detail))
})

// Post new Details
router.post('/new', (req, res) => {
  db.Detail.create(req.body).then((detail) => {
    res.json(detail)
  })
})

// Delete Details
router.delete('/delete/:id', (req, res) => {
  db.Detail.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.send('Deleted Successfully'))
})

// Update Details
// router.put('/edit', (req, res) => {
//   db.update(req.body, {
//     where: {
//       id: req.body.id,
//     },
//   })
// })

module.exports = router
