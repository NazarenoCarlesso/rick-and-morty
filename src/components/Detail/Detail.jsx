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

  return (
    <div className={styles.divContainer}>
      <div className={styles.divAttributes}>
        <h1 className={styles.name}>{character.name}</h1>
        <div className={styles.attribute}>
          <h2>Gender: {character.gender}</h2>
        </div>
        <div className={styles.attribute}>
          <h2>Specie: {character.species}</h2>
        </div>
        <div className={styles.attribute}>
          <h2>Status: {character.status}</h2>
        </div>
        <div className={styles.extras}>
          <h3>Location: {character.location ? character.location.name : '-'}</h3>
          <h3>Type: {character.type}</h3>
          <h3>Origin: {character.origin ? character.origin.name : '-'}</h3>
        </div>
      </div>
      <div className={styles.character}>
        <Link to={`/detail/${Number(id) - 1}`}>
          <button>{`<`}</button>
        </Link>
        <img src={character.image} alt='Character' />
        <Link to={`/detail/${Number(id) + 1}`}>
          <button>{`>`}</button>
        </Link>
      </div>
    </div>
  )
}