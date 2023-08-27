const express = require('express')
const app = express()
const logger = require('./logger')
// req => middleware res
app.use('/api',logger)
//Will apply for every route which starts with /api
app.use(logger) //Will Invoke Middleware for any route, Always use before invoking

app.get('/',(req,res)=>{
  res.send('Home')
})
app.get('/about',(req,res)=>{
  res.send('Abouts')
})
app.get('/api/products',(req,res)=>{
  res.send('Products')
})
app.get('/api/items',(req,res)=>{
  res.send('Items')
})

app.listen(5000,()=>{
  console.log('Server is listening on port 5000....')
})