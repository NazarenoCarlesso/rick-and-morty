import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Favorites from './components/Favorites/Favorites'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignIn from './components/SignIn'

export default function App() {
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate()
    const [access, setAccess] = useState(true)
    const username = 'user@user.com'
    const password = 'password0'

    const onLogin = (user) => {
        if (user.password === password && user.username === username) {
            setAccess(true)
            navigate('/home')
            return true
        }
        return false
    }

    const onSearch = async (character) => {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${character}`)
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

    useEffect(() => {
        !access && navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access])

    const nav = access ? <NavBar /> : <></>;

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
        <ThemeProvider theme={theme} sx={{ maxWidth: "100%" }} >
            {nav}
            <Routes>
                <Route path='/' element={<SignIn onLogin={onLogin} />} />
                <Route path='/home' element={<Home onSearch={onSearch} />} />
                <Route path='/deck' element={<Cards characters={characters} close={onClose} />} />
                <Route path='/about' element={<About />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </ThemeProvider>
    )
}