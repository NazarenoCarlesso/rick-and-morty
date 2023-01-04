import { Montserrat, MontserratBold, PaperTriple, SearchBar, SearchIconWrapper, StyledInputBase } from './Custom'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

export default function Search() {
    return (
        <PaperTriple>
            <MontserratBold variant="h3" sx={{ wordSpacing: "5px" }} >
                Rick & Morty API
            </MontserratBold>
            <Montserrat variant="h6" sx={{ margin: "15px 0px", paddingLeft: "10px", borderLeft: "solid 4px", fontSize: "1rem" }} >
                Find your favorite rick and morty characters
            </Montserrat>
            <SearchBar sx={{ borderRadius: "1.5rem", backgroundColor: "transparent", border: "solid 2px" }} >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </SearchBar>
        </PaperTriple>
    )
}