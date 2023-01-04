import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Montserrat, MontserratBold, PaperTriple } from './Custom'

export default function Return() {
    return (
        <PaperTriple>
            <MontserratBold variant="h4" sx={{ wordSpacing: "5px", fontSize: "2.8rem" }} >
                Visit parallel realities
            </MontserratBold>
            <Montserrat variant="h6" sx={{ margin: "15px 0px", paddingLeft: "10px", borderLeft: "solid 4px", fontSize: "1rem" }} >
                Bring an existing deck from your account or create a new one
            </Montserrat>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ width: "100%", height: "45px" }}>
                <Link to="/">
                    <Button color="secondary" sx={{ width: "120px", borderRadius: "1.5rem", border: "2px solid lawngreen" }}>
                        <Montserrat>
                            Sign In
                        </Montserrat>
                    </Button>
                </Link>
                <Link to="/deck">
                    <Button color="secondary" sx={{ width: "120px", borderRadius: "1.5rem", border: "2px solid lawngreen" }}>
                        <Montserrat>
                            New Deck
                        </Montserrat>
                    </Button>
                </Link>
            </Grid>
        </PaperTriple>
    )
}
