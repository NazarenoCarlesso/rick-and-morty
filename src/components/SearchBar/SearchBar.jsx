import { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props
   const [character, setCharacter] = useState('')
   const maxChar = 826;

   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={styles.Bar}>
         <input className={styles.Input} value={character} onChange={handleInputChange}/>
         <button className={styles.Boton} onClick={() => {
            onSearch(character)
            setCharacter('')
         }}>Agregar</button>
         <button className={styles.Boton} onClick={() => {
            onSearch(Math.floor(Math.random() * maxChar))
         }}>Random</button>
      </div>
   )
}
