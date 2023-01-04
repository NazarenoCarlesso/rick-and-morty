/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Error from './components/Error/Error'
import Favorites from './components/Favorites/Favorites'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Seasons from './components/Seasons'
import { createTheme, ThemeProvider } from '@mui/material'

export default function App() {
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate();
    const [access, setAccess] = useState(true);
    const username = 'user@user.com';
    const password = 'password0';

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
        if (!data.id) return window.alert('No hay personajes con ese ID')
        if (characters.some(c => c.id === data.id)) return window.alert('Ya tienes a ese personaje')
        setCharacters((oldChars) => [...oldChars, data])
    }

    const onClose = (character) => {
        setCharacters((oldChars) => oldChars.filter(c => c.id !== character))
    }

    useEffect(() => {
        !access && navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [access]);

    const nav = access ? <Nav search={onSearch} /> : <></>;

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
        <>
            <ThemeProvider theme={theme} sx={{ maxWidth: "100%" }} >
                <NavBar sx={{ maxWidth: "100%" }} />
                <Home sx={{ maxWidth: "100%" }} />
            </ThemeProvider>
        </>
    )
}
/*
<div className={`${styles.app} ${styles.background}`}>
      {nav}
      <NavBar/>
      <Routes>
        <Route path='/' element={<Form onLogin={onLogin} />} />
        <Route path='/home' element={<Cards characters={characters} close={onClose} />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
*/