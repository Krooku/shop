// @ts-check
const express = require('express')
const session = require('express-session')
const SQLiteStore = require('connect-sqlite3')(session)
// const cors = require('cors')
const path = require('path')

const config = undefined // require('./config')
const router = require('./routes')

var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json({ limit: '10mb' }))
// const whitelist = ['http://localhost:8080', 'https://facebook.com', 'https://saritagun.herokuapp.com/*']
/* app.use(
  cors({
    origin: '*',
    credentials: false
  })
) */

app.use(session({
  // @ts-ignore
  store: new SQLiteStore({
    db: 'sessions.db'
  }),
  secret: process.env.SECRET || config.cookieSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true
  }
}))

app.use(express.json({ limit: '50mb' }))
app.use('/api', router)
app.use('/uploads', express.static('uploads'))
app.use('/', express.static(path.join(__dirname, '/../public/')))
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html')))

// app.use(express.json())
// app.disable('x-powered-by')

// app.use('/api', router)
// app.use('/static', express.static(path.join(__dirname, '/../public/static')))
// app.get('/', function (req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, '/../public') })
// })
module.exports = app
