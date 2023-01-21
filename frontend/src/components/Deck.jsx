import { Button, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'
import Cards from './Cards'
import { MontserratBold, NeonPaper, SearchBar, SearchIconWrapper, StyledInputBase } from './Custom'
import Portal from './Portal'

export default function Deck({ characters, close, onSearch }) {
    const [character, setCharacter] = React.useState('')
    const maxChar = 826;

    const handleInputChange = (event) => setCharacter(event.target.value)

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            onSearch(character)
            setCharacter('')
        }
    }

    return (
        <Grid container direction="column" alignItems="center" sx={{ maxWidth: "100%" }} >
            <Grid sx={{ minHeight: "50px" }} />
            <Portal position="left" />
            <Portal position="right" />
            <Cards characters={characters} close={close} />
            <Grid container direction="row" justifyContent="center" >
                <NeonPaper sx={{ width: "600px", height: "44px", padding: "10px" }} >
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <MontserratBold variant="h6" sx={{ margin: "0px 10px" }} >
                            Find your favorite characters
                        </MontserratBold>
                        <SearchBar onChange={handleInputChange} onKeyDown={handleKeyDown} sx={{ borderRadius: "1.5rem", backgroundColor: "transparent", border: "solid 2px" }} >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase value={character} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </SearchBar>
                    </Grid>
                </NeonPaper>
                <NeonPaper sx={{ width: "300px", height: "44px", padding: "10px" }} >
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%" }} >
                        <MontserratBold variant="h6" sx={{ margin: "0px 10px" }} >
                            Roll those dice !
                        </MontserratBold>
                        <Button variant="outlined" onClick={() => onSearch(Math.floor(Math.random() * maxChar))} >
                            Random
                        </Button>
                    </Grid>
                </NeonPaper>
            </Grid>
        </Grid>
    )
}