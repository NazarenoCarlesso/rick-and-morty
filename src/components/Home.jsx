import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <>
      <Box component="img" src="img/Hero.png" sx={{ backgroundColor: "#041404", width: "100vw", maxWidth: "100%" }} />
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#041404", height: "400px" }}>
        <Box item xs={4} component="img" src="img/Rick.png" sx={{ height: "100%" }} />
        <Grid item xs={6} container direction="column" justifyContent="space-evenly" alignItems="center" sx={{ height: "100%", textAlign: "center" }}>
          <Typography item xs={4} variant="h4" sx={{ fontFamily: "Montserrat" }}>
            Wake up Morty! we are traped in some kinda shitty dimension
          </Typography>
          <Typography item xs={4} variant="h4" sx={{ fontFamily: "Montserrat" }}>
            Looks like a website, with an ugly design
          </Typography>
          <Typography item xs={4} variant="h4" sx={{ fontFamily: "Montserrat" }}>
            Oh I get it, its a Rick and Morty cards game and we are the home page
          </Typography>
          <Typography item xs={4} variant="h4" sx={{ fontFamily: "Montserrat" }}>
            Morty go find a button to get the hell out of here
          </Typography>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
            <Button variant="outlined" size="small">About</Button>
            or
            <Button variant="outlined" size="small">Deck</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}