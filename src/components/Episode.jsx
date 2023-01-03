import { Box } from '@mui/material'
import React from 'react'

export default function Episode(props) {
    return (
        <Box sx={{ height: "100px", minWidth: "160px", margin: "20px", whiteSpace: "nowrap", backgroundColor: "#023404", scrollSnapAlign: "start" }}>
            Episode {props.episode}
        </Box>
    )
}