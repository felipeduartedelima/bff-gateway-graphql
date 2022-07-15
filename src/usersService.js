const express = require('express')
const app = express()
const port = 3003

const user = {
  name: 'Felipe',
  email: 'duartedelimafelipe@gmail.com'
}

app.use(express.json())

app.get('/users/me', (req, res) => {
  return res.status(200).json(user)
})

app.listen(port, () => {
  console.log(`Users service listening on port ${port}`)
})