const express = require('express')
const app = express()
const port = 3002

const products = [
  {
    id: 1,
    name: 'product',
    value: '12,99',
    userId: 1
  }
]

app.use(express.json())

app.get('/products/:userId/list', (req, res) => {
  return res.status(200).json(products)
})

app.post('/products/buy', (req, res) => {
  const product = { ...req.body, id: products.length + 1 }
  products.push(product)
  return res.status(201).json(product)
})

app.listen(port, () => {
  console.log(`Products service listening on port ${port}`)
})