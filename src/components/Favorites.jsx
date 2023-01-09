import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterGender, filterReset, filterSpecie, filterStatus, orderCards } from '../redux/actions'
import { Button, Grid, MenuItem, Select } from '@mui/material'
import { MontserratBold, NeonPaper } from './Custom'
import Cards from './Cards'
import Portal from './Portal'

export default function Favorites() {
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)

    const [filter, setFilter] = React.useState({
        gender: 'All',
        specie: 'All',
        status: 'All',
        order: 'Oldest'
    })

    const handeFilter = () => {
        dispatch(filterReset())
        dispatch(filterGender(filter.gender))
        dispatch(filterSpecie(filter.specie))
        dispatch(filterStatus(filter.status))
        dispatch(orderCards(filter.order))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => { handeFilter() }, [filter])

    const handleFilterGender = (event) => setFilter({ ...filter, gender: event.target.value })
    const handleFilterSpecie = (event) => setFilter({ ...filter, specie: event.target.value })
    const handleFilterStatus = (event) => setFilter({ ...filter, status: event.target.value })
    const handleOrder = (event) => setFilter({ ...filter, order: event.target.value })
    const handleRestart = () => setFilter({
        gender: 'All',
        specie: 'All',
        status: 'All',
        order: 'Oldest'
    })

    return (
        <Grid container direction="column" alignItems="center" sx={{ maxWidth: "100%" }} >
            <Grid sx={{ minHeight: "50px" }} />
            <Portal position="left" />
            <Portal position="right" />
            <Cards characters={myFavorites} />
            <NeonPaper sx={{ width: "900px", padding:"14px" }} >
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <MontserratBold sx={{ margin: "0px 10px" }} >Order:</MontserratBold>
                    <Select value={filter.order} variant="standard" label="Order" defaultValue="Oldest" onChange={handleOrder} sx={{ width: "110px" }} >
                        <MenuItem value="Oldest">Oldest</MenuItem>
                        <MenuItem value="Newest">Newest</MenuItem>
                        <MenuItem value="Ascending">Ascending</MenuItem>
                        <MenuItem value="Descending">Descending</MenuItem>
                    </Select>
                    <MontserratBold sx={{ margin: "0px 10px" }} >Gender:</MontserratBold>
                    <Select value={filter.gender} variant="standard" label="Gender" defaultValue="All" onChange={handleFilterGender} sx={{ width: "110px" }} >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Genderless">Genderless</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                    <MontserratBold sx={{ margin: "0px 10px" }} >Specie:</MontserratBold>
                    <Select value={filter.specie} variant="standard" label="Specie" defaultValue="All" onChange={handleFilterSpecie} sx={{ width: "110px" }} >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Human">Human</MenuItem>
                        <MenuItem value="Alien">Alien</MenuItem>
                        <MenuItem value="Robot">Robot</MenuItem>
                        <MenuItem value="Animal">Animal</MenuItem>
                        <MenuItem value="Humanoid">Humanoid</MenuItem>
                        <MenuItem value="Poopybutthole">Poopybutthole</MenuItem>
                        <MenuItem value="Mythological Creature">Mythological Creature</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                    <MontserratBold sx={{ margin: "0px 10px" }} >Status:</MontserratBold>
                    <Select value={filter.status} variant="standard" label="Status" defaultValue="All" onChange={handleFilterStatus} sx={{ width: "110px" }} >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Alive">Alive</MenuItem>
                        <MenuItem value="Dead">Dead</MenuItem>
                        <MenuItem value="unknown">Unknown</MenuItem>
                    </Select>
                    <Button variant="outlined" onClick={handleRestart} sx={{ margin: "0px 16px" }} >
                        Restart
                    </Button>
                </Grid>
            </NeonPaper>
        </Grid>
    )
}