import { createTheme, FormControl, MenuItem, Select, ThemeProvider } from '@mui/material'
import React from 'react'
import Episodes from './Episodes';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#00a507",
    },
    text: {
      primary: '#00d809',
    },
  },
});

export default function Seasons() {
  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select displayEmpty defaultValue={1} inputProps={{ 'aria-label': 'Without label' }} >
          <MenuItem value={1}>Season 1</MenuItem>
          <MenuItem value={2}>Season 2</MenuItem>
          <MenuItem value={3}>Season 3</MenuItem>
          <MenuItem value={4}>Season 4</MenuItem>
          <MenuItem value={5}>Season 5</MenuItem>
          <MenuItem value={6}>Season 6</MenuItem>
        </Select>
      </FormControl>
      <Episodes />
    </ThemeProvider>
  )
}