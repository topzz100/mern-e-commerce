const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const morgan = require('morgan')
const cors = require('cors');

const auth = require('./routes/auth')
const user = require('./routes/user')
const cart = require('./routes/cart')
const product = require('./routes/product')
const order = require('./routes/order')
const stripeRoute = require("./routes/stripe");

app.use(express.json())
app.use(cors())
app.use(morgan('common'))

app.use('/api/auth/', auth)
app.use('/api/users/', user)
app.use('/api/cart/', cart)
app.use('/api/products/', product)
app.use('/api/order/', order)
app.use("/api/checkout", stripeRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 7700

const start = async() => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app listening on port ${port}`))
  }catch(err){
    console.log(err);
  }
}
start()
