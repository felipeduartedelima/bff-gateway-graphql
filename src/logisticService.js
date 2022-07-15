const express = require('express')
const app = express()
const port = 3001

const logistic = [
  {
    id: 1,
    code: 'ABC123CD',
    productId: 1
  }
]

app.use(express.json())

app.get('/products/:userId', (req, res) => {
  return res.status(200).json(logistic)
})

app.listen(port, () => {
  console.log(`Logistic service listening on port ${port}`)
})