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
                            <MontserratNav item xs variant="h6" color="inherit" component="div">
                                Home
                            </MontserratNav>
                        </NavLink>
                        <NavLink to='/favorites'>
                            <MontserratNav item xs variant="h6" color="inherit" component="div">
                                Favorites
                            </MontserratNav>
                        </NavLink>
                        <Box item xs component="img" src="img/nav_logo.png" sx={{ width: "150px", mixBlendMode: "hard-light", opacity: 0.7 }} />
                        <NavLink to='/deck'>
                            <MontserratNav item xs variant="h6" color="inherit" component="div">
                                Deck
                            </MontserratNav>
                        </NavLink>
                        <NavLink to='/episodes'>
                            <MontserratNav item xs variant="h6" color="inherit" component="div">
                                Episodes
                            </MontserratNav>
                        </NavLink>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box component="img" src="img/Hero.png" sx={{ backgroundColor: "#041404", width: "100vw", maxWidth: "100%", position: "absolute", zIndex: -1 }} />
        </Box>
    )
}