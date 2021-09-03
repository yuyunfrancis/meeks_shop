const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

// API Route to get app products
app.get('/api/products', (req, res) => {
    res.json(products)
})

//API Route to get product by id
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})
app.listen(5000, console.log("server running on port 5000"))