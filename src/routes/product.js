const { Product } = require('../models')
const fs = require('fs')

module.exports.insertProduct = async (req, res) => {
  const { name, description, price } = req.body
  console.log(req.files)
  const paths = []
  req.files.forEach(element => {
    paths.push(element.path)
  })

  if (!name || !description || !price || paths.length === 0) {
    return res.status(400).json({
      message: 'Incomplete request'
    })
  }

  const p = new Product({
    name: name,
    description: description,
    price: price,
    img: paths
  })

  await p.save().then(() => {
    console.log('product and imgs added')
  }).catch(error => {
    req.files.forEach(element => {
      fs.unlink(element.path, err => {
        if (err) {
          console.log(err)
        }
      })
    })
    if (error.code === 11000) {
      return res.status(409).json({
        message: 'This product name is already used',
        error: error
      })
    }

    return res.status(500).json({
      message: 'Database error',
      error: error
    })
  })

  res.status(200).end()
}

module.exports.listProducts = async (req, res) => {
  const products = await Product.find().exec()

  res.status(200).json(products)
}
