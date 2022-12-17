import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
        <h1>Detail: {id}</h1>
        <h3>{JSON.stringify(character)} </h3>
    </div>
  )
}