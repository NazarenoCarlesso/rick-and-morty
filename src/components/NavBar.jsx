import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#041404" }}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Typography item xs variant="h6" color="inherit" component="div" sx={{ fontFamily: "Montserrat", color: "#00a507" }}>
              Home
            </Typography>
            <Typography item xs variant="h6" color="inherit" component="div" sx={{ fontFamily: "Montserrat", color: "#00a507" }}>
              Favorites
            </Typography>
            <Box item xs component="img" src="img/Rick_and_Morty.png" sx={{ width: "150px", mixBlendMode: "color-dodge" }} />
            <Typography item xs variant="h6" color="inherit" component="div" sx={{ fontFamily: "Montserrat", color: "#00a507" }}>
              Deck
            </Typography>
            <Typography item xs variant="h6" color="inherit" component="div" sx={{ fontFamily: "Montserrat", color: "#00a507" }}>
              Episodes
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}