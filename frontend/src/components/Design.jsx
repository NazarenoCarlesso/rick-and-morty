import { Button, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import StarIcon from '@mui/icons-material/Star'
import React from 'react'
import { Link } from 'react-router-dom'
import { Montserrat, MontserratBold, PaperTriple } from './Custom'


export default function Design() {
    return (
        <PaperTriple>
            <MontserratBold variant="h4" sx={{ wordSpacing: "5px", fontSize: "1.9rem" }} >
                This guy is trying to do web design
            </MontserratBold>
            <Montserrat variant="h6" sx={{ margin: "15px 0px", paddingLeft: "10px", borderLeft: "solid 4px", fontSize: "1rem" }} >
                Haha what a loser!<br />Can you believe that?
            </Montserrat>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ width: "100%", height: "45px" }}>
                <Link to="/about">
                    <MontserratBold sx={{ margin: "0px 30px" }}>
                        About me
                    </MontserratBold>
                </Link>
                <a href="https://github.com/NazarenoCarlesso" >
                    <Button sx={{ margin: "0px 5px" }}>
                        <GitHubIcon />
                    </Button>
                </a>
                <a href="https://github.com/NazarenoCarlesso/rick-and-morty" >
                    <Button>
                        <StarIcon />
                    </Button>
                </a>
            </Grid>
        </PaperTriple>
    )
}
