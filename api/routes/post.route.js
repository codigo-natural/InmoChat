import express from 'express'

const router = express.Router()

router.get('/test', (req, res) => {
  console.log('router posts')
})
// router.post('/test', (req, res) => {
//   console.log('router posts')
// })
// router.put('/test', (req, res) => {
//   console.log('router posts')
// })
// router.delete('/test', (req, res) => {
//   console.log('router posts')
// })

export default router