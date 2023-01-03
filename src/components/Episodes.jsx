import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import Episode from './Episode'

const episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Episodes() {
    const scrollLeft = () => {
        document.getElementById('asd').scrollLeft -= 800
        console.log(document.getElementById('asd').scrollLeft)
    }

    const scrollRight = () => {
        document.getElementById('asd').scrollLeft += 800
        console.log(document.getElementById('asd').scrollLeft)
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Button variant="contained" onClick={scrollLeft}>{'<'}</Button>
            <Box id="asd" sx={{ display: "flex", width:"800px", overflowX: "scroll", scrollSnapType: "x mandatory" }}>
                {episodes.map(e => <Episode episode={e} />)}
            </Box>
            <Button variant="contained" onClick={scrollRight}>{'>'}</Button>
        </Grid>
    )
}