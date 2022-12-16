import { useState } from 'react'
import styles from './App.module.css'
import Cards from './components/Cards'
import Nav from './components/Nav'

export default function App () {
  const [characters, setCharacters] = useState([])

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

  return (
    <div className={styles.App}>
      <Nav search={onSearch}/>
      <hr/>
      <Cards characters={characters} close={onClose}/>
    </div>
  )
}
