// @ts-check
const express = require('express')

const auth = require('./users')
const product = require('./product')

const { fileNameDateFormat } = require('../services/dateFormat')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, fileNameDateFormat() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter
})
const verifyLogin = require('../middleware/verifyLogin')
const verifyRole = require('../middleware/verifyRole')

const router = express.Router()

router.post('/login', auth.login)
router.post('/logout', auth.logout)
router.post('/register', auth.register)

router.get('/user', verifyLogin, auth.getUser)
router.patch('/user', verifyLogin, auth.updateUser)
router.get('/user/verify/:token', auth.verifyEmail)
router.post('/user/sendReset', auth.sendReset)
router.post('/user/resetPassword', auth.resetPassword)

router.patch('/user/addToCart/:productId', verifyLogin, auth.addToCart)
router.patch('/user/removeFromCart/:productId', verifyLogin, auth.removeFromCart)
router.patch('/user/removeProductsFromCart/:productId', verifyLogin, auth.removeProductsFromCart)
router.get('/user/cart', verifyLogin, auth.getCart)

router.post('/product', upload.array('productImage', 10), verifyRole(['admin']), product.insertProduct)
router.get('/products', product.listProducts)
module.exports = router
