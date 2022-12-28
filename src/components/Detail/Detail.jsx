import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './Detail.module.css'

export default function Detail() {
  const { id } = useParams()
  const [character, setCharacter] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        char.id
          ? setCharacter(char)
          : window.alert('No hay personajes con ese ID')
      })
  }, [id])
  const speciesId = character.species ? character.species.split(' ')[0] : character.species

  const maxChar = 826;
  const prevChar = (id) => id === 1 ? maxChar : id - 1
  const nextChar = (id) => id === maxChar ? 1 : id + 1

  return (
    <div className={styles.divContainer}>
      <div className={styles.divAttributes}>
        <h1 className={styles.name}>{character.name}</h1>
        <div className={`${styles.attribute} ${styles[character.gender]}`}>
          <h2>Gender: {character.gender}</h2>
        </div>
        <div className={`${styles.attribute} ${styles[speciesId]}`}>
          <h2>Specie: {character.species}</h2>
        </div>
        <div className={`${styles.attribute} ${styles[character.status]}`}>
          <h2>Status: {character.status}</h2>
        </div>
        <div className={styles.extras}>
          <h3>Type: {character.type}</h3>
          <hr />
          <h3>Last known Location: {character.location ? character.location.name : '-'}</h3>
          <hr />
          <h3>Origin: {character.origin ? character.origin.name : '-'}</h3>
        </div>
      </div>
      <div>
        <div className={styles.character}>
          <Link to={`/detail/${prevChar(Number(id))}`}>
            <button>{`<`}</button>
          </Link>
          <div className={styles.border}>
            <img src={character.image} alt='Character' />
          </div>
          <Link to={`/detail/${nextChar(Number(id))}`}>
            <button>{`>`}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}