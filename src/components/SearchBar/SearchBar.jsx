import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const { onSearch } = props
   const [character, setCharacter] = useState('')
   const maxChar = 826;

   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <input value={character} onChange={handleInputChange}/>
         <button onClick={() => {
            onSearch(character)
            setCharacter('')
         }}>Agregar</button>
         <button onClick={() => {
            onSearch(Math.floor(Math.random() * maxChar))
         }}>Random</button>
      </div>
   )
}
