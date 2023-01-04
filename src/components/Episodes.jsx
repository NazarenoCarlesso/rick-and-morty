import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import Episode from './Episode'

const episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Episodes() {
    const scrollLeft = () => {
        document.getElementById('home').scrollLeft -= 260
        console.log(document.getElementById('home').scrollLeft)
    }

    const scrollRight = () => {
        document.getElementById('home').scrollLeft += 260
        console.log(document.getElementById('home').scrollLeft)
    }

    return (
        <Grid container direction="row" alignItems="center" sx={{ flexFlow: "nowrap" }}>
            <Box sx={{ margin: "10px", width: "5vw" }}>
                <Button onClick={scrollLeft} sx={{ borderRadius: "2.5rem" }}>
                    <svg aria-hidden="true" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ transform: "rotate(90deg)" }}>
                        <path fill="rgba(91, 28, 230, .3)" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </Button>
            </Box>
            <Grid id="home" container direction="row" sx={{ width: "84vw", height: "290px", overflow: "hidden", flexWrap: "nowrap" }}>
                {episodes.map((episode) => <Episode season={6} episode={episode} />)}
            </Grid>
            <Box sx={{ margin: "10px", width: "5vw" }}>
                <Button onClick={scrollRight} sx={{ borderRadius: "2.5rem" }}>
                    <svg aria-hidden="true" width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ transform: "rotate(-90deg)" }}>
                        <path fill="rgba(91, 28, 230, .3)" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </Button>
            </Box>
        </Grid>
    )
}