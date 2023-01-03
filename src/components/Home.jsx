import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import Seasons from './Seasons'

export default function Home() {
  return (
    <>
      <Box component="img" src="img/Hero.png" sx={{ backgroundColor: "#041404", width: "100vw", maxWidth: "100%" }} />
      <SearchBar />
      <Grid container direction="column" alignItems="center" sx={{ backgroundColor: "#030328", width: "100vw", maxWidth: "100%" }}>
        <Typography variant="h5" sx={{ width: "75vw", margin: "20px 0px", textAlign: "center", color: "white", fontFamily: "Montserrat", fontWeight: "bold" }}>
          ¡WUBBA LUBBA DUB DUB!
        </Typography>
        <Typography variant="h6" sx={{ width: "75vw", margin: "20px 0px", textAlign: "center", color: "white", fontFamily: "Montserrat", fontSize: "1.15rem" }}>
          ¿Dinosaurios? ¿Más clones? ¿Naves espaciales? ¿Drama familiar? Nadie sabe qué deparará a Rick and Morty en esta temporada. Igual alista las maletas, que esas realidades paralelas no se visitarán solas.
        </Typography>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ width: "80vw", height: "300px", margin: "20px 10vw", overflow: "auto hidden" }}>
          <Grid sx={{ width: "240px", textAlign: "center" }} >
            <Box component="img" src="img/rick_sanchez.png" sx={{ width: "240px", borderRadius: "60px" }} />
            <Typography variant="h6" sx={{ color: "61d718", lineHeight: "28px", letterSpacing: "0.15em", fontFamily: "Montserrat", fontWeight: "bold" }}>Rick Sanchez</Typography>
          </Grid>
          <Grid sx={{ width: "240px", textAlign: "center" }}>
            <Box component="img" src="img/morty_smith.png" sx={{ width: "240px", borderRadius: "60px" }} />
            <Typography variant="h6" sx={{ color: "61d718", lineHeight: "28px", letterSpacing: "0.15em", fontFamily: "Montserrat", fontWeight: "bold" }}>Morty Smith</Typography>
          </Grid>
          <Grid sx={{ width: "240px", textAlign: "center" }}>
            <Box component="img" src="img/summer_smith.png" sx={{ width: "240px", borderRadius: "60px" }} />
            <Typography variant="h6" sx={{ color: "61d718", lineHeight: "28px", letterSpacing: "0.15em", fontFamily: "Montserrat", fontWeight: "bold" }}>Summer Smith</Typography>
          </Grid>
        </Grid>
        <Seasons />
      </Grid>
    </>
  )
}