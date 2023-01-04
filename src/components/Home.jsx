import { Box, Grid } from '@mui/material'
import React from 'react'
import Characters from './Characters'
import { MontserratWhiteHome } from './Custom'
import Design from './Design'
import Return from './Return'
import Search from './Search'
import Seasons from './Seasons'

export default function Home() {
    return (
        <Grid container direction="column" alignItems="center" >
            <Box component="img" src="img/Hero.png" sx={{ backgroundColor: "#041404", width: "100vw", maxWidth: "100%" }} />
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ width: "90vw" }} >
                <Search />
                <Return />
                <Design />
            </Grid>
            <Grid container direction="column" alignItems="center" sx={{ backgroundColor: "#030328", width: "100vw", maxWidth: "100%" }}>
                <MontserratWhiteHome variant="h5" sx={{ fontWeight: "bold" }}>
                    ¡WUBBA LUBBA DUB DUB!
                </MontserratWhiteHome>
                <MontserratWhiteHome variant="h6" sx={{ fontSize: "1.15rem" }}>
                    ¿Dinosaurios? ¿Más clones? ¿Naves espaciales? ¿Drama familiar? Nadie sabe qué deparará a Rick and Morty en esta temporada. Igual alista las maletas, que esas realidades paralelas no se visitarán solas.
                </MontserratWhiteHome>
                <Characters />
                <Seasons />
            </Grid>
        </Grid>
    )
}