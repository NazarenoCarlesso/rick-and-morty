import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import { createTheme, ThemeProvider } from '@mui/material'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'motion/react'
import About from './components/About'
import Detail from './components/Detail'
import Favorites from './components/Favorites'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Error from './components/Error'
import Deck from './components/Deck'

const BACK = import.meta.env.VITE_BACK

export default function App() {
    const [characters, setCharacters] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    const shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        const initialDeck = [127, 156, 163, 372, 472, 473, 580, 618, 619, 624, 625, 667, 809]
        initialDeck.forEach(c => onSearch(c))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onLogin = () => {
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

    const nav = pathname === '/' ? null : <NavBar />
    const shellClass = pathname === '/' ? 'app-shell' : 'app-shell r'
    const backgroundClass = pathname.startsWith('/detail/')
        ? 'detail-background'
        : ''

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
            <MotionConfig reducedMotion="user">
                <div className={`${shellClass}${backgroundClass ? ` ${backgroundClass}` : ''}`}>
                    {pathname === '/home' && (
                        <div className="portal home-background-portal" aria-hidden="true" />
                    )}
                    {nav}
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={location.pathname}
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                        >
                            <Routes location={location}>
                                <Route path='/' element={<SignIn onLogin={onLogin} />} />
                                <Route path='/home' element={<Home onSearch={onSearch} />} />
                                <Route path='/deck' element={<Deck onSearch={onSearch} characters={characters} close={onClose} />} />
                                <Route path='/favorites' element={<Favorites />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/detail/:id' element={<Detail />} />
                                <Route path='/*' element={<Error />} />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </MotionConfig>
        </ThemeProvider>
    )
}