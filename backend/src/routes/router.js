import { Router } from 'express'
import { getAllCharacters, getCharacterById, getCharacterDetail } from '../controllers/charactercontroller.js'
import { deleteFavorite, getFavorites, setFavorites } from '../controllers/favoritecontroller.js'

const router = Router()

router.get('/characters', getAllCharacters)
router.get('/character/:id', getCharacterById)
router.get('/detail/:id', getCharacterDetail)

router.get('/fav', getFavorites)
router.post('/fav', setFavorites)
router.delete('/fav/:id', deleteFavorite)

export default router