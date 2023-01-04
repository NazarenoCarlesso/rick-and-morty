import { Grid } from '@mui/material'
import React from 'react'
import { BoxCharacter, GridCharacter, TypoCharacter } from './Custom'

export default function Characters() {
    return (
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ width: "80vw", height: "300px", margin: "20px 10vw", overflow: "auto hidden" }}>
            <GridCharacter>
                <BoxCharacter component="img" src="img/rick_sanchez.png" />
                <TypoCharacter variant="h6" >
                    Rick Sanchez
                </TypoCharacter>
            </GridCharacter>
            <GridCharacter>
                <BoxCharacter component="img" src="img/morty_smith.png" />
                <TypoCharacter variant="h6" >
                    Morty Smith
                </TypoCharacter>
            </GridCharacter>
            <GridCharacter>
                <BoxCharacter component="img" src="img/summer_smith.png" />
                <TypoCharacter variant="h6" >
                    Summer Smith
                </TypoCharacter>
            </GridCharacter>
        </Grid>
    )
}
