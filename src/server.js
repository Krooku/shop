// @ts-check
const mongoose = require('mongoose')

// const config = require('./config')
const app = require('./app')

mongoose.connect(process.env.MONGOURI, { // config.mongoUri ||
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(async () => {
  const port = process.env.PORT // || config.expressPort
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}).catch((error) => {
  console.log('Error occured while initializing server')
  console.error(error)
  process.exit()
})
