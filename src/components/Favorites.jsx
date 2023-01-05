import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterGender, filterReset, filterSpecie, filterStatus, orderCards } from '../redux/actions'
import { Grid, MenuItem, Select } from '@mui/material'
import Card from './Card/Card'

export default function Favorites() {
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)

    const [filter, setFilter] = React.useState({
        gender: 'All',
        specie: 'All',
        status: 'All',
        order: 'Ascendente'
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

    return (
        <Grid container direction="column">
            <Grid sx={{ minHeight: "80px" }} />
            Favorites
            <Grid container direction="row" >
                <Select label="Order" defaultValue="Oldest" onChange={handleOrder} sx={{ width: "200px" }} >
                    <MenuItem value="Oldest">Oldest</MenuItem>
                    <MenuItem value="Newest">Newest</MenuItem>
                    <MenuItem value="Ascending">Ascending</MenuItem>
                    <MenuItem value="Descending">Descending</MenuItem>
                </Select>
                <Select label="Gender" defaultValue="All" onChange={handleFilterGender} sx={{ width: "200px" }} >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Genderless">Genderless</MenuItem>
                    <MenuItem value="unknown">Unknown</MenuItem>
                </Select>
                <Select label="Specie" defaultValue="All" onChange={handleFilterSpecie} sx={{ width: "200px" }} >
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
                <Select label="Status" defaultValue="All" onChange={handleFilterStatus} sx={{ width: "200px" }} >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Alive">Alive</MenuItem>
                    <MenuItem value="Dead">Dead</MenuItem>
                    <MenuItem value="unknown">Unknown</MenuItem>
                </Select>
            </Grid>
            <Grid container direction="row">
                {myFavorites.map(c => (<Card key={c.id} id={c.id} name={c.name} species={c.species} gender={c.gender} image={c.image} status={c.status} onClose={() => { }} />))}
            </Grid>
        </Grid>
    )
}