import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import About from './components/About'
import Detail from './components/Detail'
import Favorites from './components/Favorites'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Error from './components/Error'
import Deck from './components/Deck'

const BACK = process.env.REACT_APP_BACK

export default function App() {
    const [characters, setCharacters] = useState([])
    const [access, setAccess] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const initialDeck = [127, 156, 163, 372, 472, 473, 580, 618, 619, 624, 625, 667, 809]
        initialDeck.forEach(c => onSearch(c))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onLogin = () => {
        setAccess(true)
        navigate('/home')
    }

    const onSearch = async (character) => {
        const data = await fetch(`${BACK}/api/character/${character}`)
            .then((response) => response.json())
        if (!data.id) {
            window.alert('No hay personajes con ese ID')
            return false
        }
        if (characters.some(c => c.id === data.id)) {
            window.alert('Ya tienes a ese personaje')
            return false
        }
        setCharacters((oldChars) => [...oldChars, data])
        return true
    }

    const onClose = (character) => {
        setCharacters((oldChars) => oldChars.filter(c => c.id !== character))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { !access && navigate('/') }, [access])

    const nav = access ? <NavBar /> : <></>

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: "#00a507",
            },
            secondary: {
                main: "#00a507",
            },
            text: {
                primary: '#00d809',
            },
        },
    })

    return (
        <ThemeProvider theme={theme} >
            {nav}
            <Routes>
                <Route path='/' element={<SignIn onLogin={onLogin} />} />
                <Route path='/home' element={<Home onSearch={onSearch} />} />
                <Route path='/deck' element={<Deck onSearch={onSearch} characters={characters} close={onClose} />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </ThemeProvider>
    )
}