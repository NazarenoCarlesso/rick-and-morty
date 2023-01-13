import { Box } from '@mui/material'
import React from 'react'

export default function Episode({ season, episode }) {
    return (
        <Box component="img" src={`img/episodes/s${season}e${episode}.png`} sx={{ width: "220px", margin: "80px 20px", border: "1px solid rgb(91, 28, 230)", borderRadius: "0.3rem", boxShadow: "rgba(255, 0, 100, 0.2) 30px 30px 60px, rgba(0, 100, 255, 0.2) -30px -30px 60px" }} />
    )
}