import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Montserrat, MontserratBold, NeonPaper } from './Custom'

export default function Error() {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ maxWidth: "100%", maxHeight: "100%", height: "100vh" }} >
            <NeonPaper sx={{ textAlign: "center" }} >
                <MontserratBold variant="h1" >
                    404
                </MontserratBold>
                <MontserratBold variant="h4" >
                    The page you you were looking for does not exist
                </MontserratBold>
                <Montserrat variant="h5" >
                    You weren't supposed to see this
                </Montserrat>
                <Montserrat variant="h6" >
                    Return to the <Link to="/home" style={{ textDecoration: "underline" }}>
                        home page
                    </Link> and remember, you haven't seen anything.
                </Montserrat>
            </NeonPaper>
        </Grid>
    )
}