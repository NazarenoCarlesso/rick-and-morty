import { AppBar, Box, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MontserratNav } from './Custom'

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
            <AppBar position="fixed">
                <Toolbar sx={{ backgroundColor: "#041404" }}>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                        <NavLink to='/home'>
                            <MontserratNav variant="h6" color="inherit" component="div" sx={{ width: "90px" }} >
                                Home
                            </MontserratNav>
                        </NavLink>
                        <NavLink to='/deck'>
                            <MontserratNav variant="h6" color="inherit" component="div" sx={{ width: "90px" }} >
                                Deck
                            </MontserratNav>
                        </NavLink>
                        <Box component="img" src="img/nav_logo.png" sx={{ width: "150px", mixBlendMode: "hard-light", opacity: 0.7 }} />
                        <NavLink to='/favorites'>
                            <MontserratNav variant="h6" color="inherit" component="div" sx={{ width: "90px" }} >
                                Favorites
                            </MontserratNav>
                        </NavLink>
                        <NavLink to='/about'>
                            <MontserratNav variant="h6" color="inherit" component="div" sx={{ width: "90px" }} >
                                About
                            </MontserratNav>
                        </NavLink>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box component="img" src="img/hero.png" sx={{ backgroundColor: "#041404", width: "100vw", maxWidth: "100%", position: "absolute", zIndex: -1 }} />
        </Box>
    )
}