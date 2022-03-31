// @ts-check
const mongoose = require('mongoose')

const config = undefined // require('./config')
const app = require('./app')

mongoose.connect(process.env.MONGOURI || config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(async () => {
  const port = process.env.PORT || config.expressPort
  app.listen(port || 3000, () => {
    console.log(`Server is listening on port ${port || 3000}`)
  })
}).catch((error) => {
  console.log('Error occured while initializing server')
  console.error(error)
  process.exit()
})
