import express from 'express'
import diaryRouter from './src/routes/diaries'

const app = express()

app.use(express.json()) // middleware que transforma la req.body a JSON

const PORT = 3000

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
