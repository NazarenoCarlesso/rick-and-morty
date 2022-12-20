import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    <div className={styles.Div}>
      <div className={styles.Data}>
        <h1>Name: {character.name}</h1>
        <h1>Status: {character.status}</h1>
        <h4>Location: {character.location ? character.location.name : '-'}</h4>
        <h1>Specie: {character.species}</h1>
        <h4>Type: {character.type}</h4>
        <h4>Origin: {character.origin ? character.origin.name : '-'}</h4>
        <h4>Gender: {character.gender}</h4>
      </div>
    </div>
  )
}