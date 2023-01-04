import { Box, FormControl, MenuItem } from '@mui/material'
import React from 'react'
import { SelectCustom } from './Custom'
import Episodes from './Episodes'

export default function Seasons() {
    return (
        <Box sx={{ margin: "20px 0px" }}>
            <FormControl sx={{ minWidth: 120, marginLeft: "50px" }}>
                <SelectCustom variant="outlined" displayEmpty defaultValue={1} inputProps={{ 'aria-label': 'Without label' }} sx={{ fontSize: "20px", fontFamily: "Montserrat", fontWeight: "bold" }} >
                    <MenuItem value={1}>Season 1</MenuItem>
                    <MenuItem value={2}>Season 2</MenuItem>
                    <MenuItem value={3}>Season 3</MenuItem>
                    <MenuItem value={4}>Season 4</MenuItem>
                    <MenuItem value={5}>Season 5</MenuItem>
                    <MenuItem value={6}>Season 6</MenuItem>
                </SelectCustom>
            </FormControl>
            <Episodes />
        </Box>
    )
}