import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import autherRouter from './routes/auth.router.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const port = process.env.PORT || 5021
const mongoDB = process.env.MONGOURL

mongoose.connect(mongoDB)
  .then(() => console.log('MongoDB connected')) 
  .catch(err => console.log('MongoDB connection failed:', err))

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use("/api/auth", autherRouter);

app.listen(port, () => {
  console.log(`Server connected on port ${port}`)
})
