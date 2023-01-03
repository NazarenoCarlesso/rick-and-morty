import { alpha, InputBase, Paper, styled, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export default function SearchBar() {
  return (
    <Paper sx={{ width: "280px", margin: "20px", padding: "20px", color: "#00a507", backgroundColor: "transparent", border: "solid 2px", borderRadius: "1rem" }}>
      <Typography variant="h3" sx={{ fontFamily: "Montserrat", fontWeight: "bold", wordSpacing: "5px" }}>Rick & Morty API</Typography>
      <Typography variant="h6" sx={{ margin: "15px 0px", paddingLeft: "10px", borderLeft: "solid 4px", fontFamily: "Montserrat", fontSize: "1rem", fontWeight: "bold" }}>Find your favorite rick and morty characters</Typography>
      <Search sx={{ borderRadius: "1.5rem", backgroundColor: "transparent", border: "solid 2px" }}>
        <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} sx={{ width: "100%" }} />
      </Search>
    </Paper>
  )
}