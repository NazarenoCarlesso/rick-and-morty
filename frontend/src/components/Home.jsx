import { Grid } from '@mui/material'
import React from 'react'
import { Space } from './Custom'
import Design from './Design'
import Return from './Return'
import Search from './Search'

export default function Home({ onSearch }) {
    return (
        <Grid container direction="column" alignItems="center" sx={{ maxWidth: "100%" }} >
            <Space />
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ width: "90vw" }} >
                <Search onSearch={onSearch} />
                <Return />
                <Design />
            </Grid>
        </Grid>
    )
}