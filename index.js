const express = require('express')
const db = require('./models')
const app = express()
const routes = require('./routes/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/routes', routes)
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('shahid')
})

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://locallhost:${PORT}`)
  })
})
