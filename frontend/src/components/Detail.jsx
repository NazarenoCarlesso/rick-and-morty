import { Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImgDetail, Montserrat, MontserratBold, NeonPaper } from './Custom'

const BACK = process.env.REACT_APP_BACK

export default function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    const maxChar = 826

    const prevChar = (id) => id === 1 ? maxChar : id - 1
    const nextChar = (id) => id === maxChar ? 1 : id + 1

    useEffect(() => {
        fetch(`${BACK}/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                char.id
                    ? setCharacter(char)
                    : window.alert('No hay personajes con ese ID')
            })
    }, [id])

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ maxWidth: "100%", maxHeight: "100%", height: "100vh" }} >
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <NeonPaper sx={{ width: "450px" }} >
                    <MontserratBold variant="h4" >{character.name}</MontserratBold>
                    <hr style={{ borderColor: "#008906" }} />
                    <Montserrat variant="h5" >Gender: {character.gender}</Montserrat>
                    <hr style={{ borderColor: "#0089062b" }} />
                    <Montserrat variant="h5" >Specie: {character.species}</Montserrat>
                    <hr style={{ borderColor: "#0089062b" }} />
                    <Montserrat variant="h5" >Status: {character.status}</Montserrat>
                    <hr style={{ borderColor: "#008906" }} />
                    <Montserrat variant="h6" >Type: {character.type}</Montserrat>
                    <hr style={{ borderColor: "#0089062b" }} />
                    <Montserrat variant="h6" >
                        Last known Location: {character.location ? character.location.name : '-'}
                    </Montserrat>
                    <hr style={{ borderColor: "#0089062b" }} />
                    <Montserrat variant="h6" >
                        Origin: {character.origin ? character.origin.name : '-'}
                    </Montserrat>
                </NeonPaper>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "auto" }} >
                    <Button sx={{ borderRadius: "10rem" }} >
                        <Link to={`/detail/${prevChar(Number(id))}`}>
                            <svg width="50" height="50" viewBox="0 0 448 512" style={{ transform: "rotate(90deg)" }} >
                                <path fill="#2b9300" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </Link>
                    </Button>
                    <ImgDetail component="img" src={character.image} alt={'Character image'} sx={{ width: "300px", height: "300px", borderRadius: "10rem", boxShadow: "0px 0px 16px 4px #91ff003b", border: "3px solid #00a507" }} />
                    <Button sx={{ borderRadius: "10rem" }} >
                        <Link to={`/detail/${nextChar(Number(id))}`}>
                            <svg width="50" height="50" viewBox="0 0 448 512" style={{ transform: "rotate(-90deg)" }} >
                                <path fill="#2b9300" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </svg>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}