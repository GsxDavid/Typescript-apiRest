import express from 'express' // ECMAScript Modules
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  if (diary != null) {
    res.json(diary)
  } else {
    res.send(404)
  }
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newEntry = diaryServices.addEntry({
    date,
    weather,
    visibility,
    comment
  })

  res.send(newEntry)
})

export default router
