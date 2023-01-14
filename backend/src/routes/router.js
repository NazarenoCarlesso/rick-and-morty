import { Router } from 'express'
import { getAllCharacters, getCharacterById, getCharacterDetail } from '../controllers/charactercontroller.js'

const router = Router()

router.get('/characters', getAllCharacters)
router.get('/character/:id', getCharacterById)
router.get('/detail/:id', getCharacterDetail)

export default router