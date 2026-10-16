import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterGender, filterReset, filterSpecie, filterStatus, orderCards } from '../redux/actions'
import Cards from './Cards'
import Portal from './Portal'

const initialFilter = {
    gender: 'All',
    specie: 'All',
    status: 'All',
    order: 'Oldest'
}

export default function Favorites() {
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)
    const [filter, setFilter] = useState(initialFilter)

    useEffect(() => {
        dispatch(filterReset())
        dispatch(filterGender(filter.gender))
        dispatch(filterSpecie(filter.specie))
        dispatch(filterStatus(filter.status))
        dispatch(orderCards(filter.order))
    }, [dispatch, filter])

    const handleFilterChange = (event) => {
        const { name, value } = event.target
        setFilter(current => ({ ...current, [name]: value }))
    }

    return (
        <main className="r favorites-page">
            <Portal position="left" />
            <Portal position="right" />

            <div className="favorites-content">
                <Cards characters={myFavorites} />

                <section className="favorites-filters" aria-label="Filter favorites">
                    <label className="favorites-filter">
                        <span>Order</span>
                        <select name="order" value={filter.order} onChange={handleFilterChange}>
                            <option value="Oldest">Oldest</option>
                            <option value="Newest">Newest</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                    </label>

                    <label className="favorites-filter">
                        <span>Gender</span>
                        <select name="gender" value={filter.gender} onChange={handleFilterChange}>
                            <option value="All">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>

                    <label className="favorites-filter">
                        <span>Species</span>
                        <select name="specie" value={filter.specie} onChange={handleFilterChange}>
                            <option value="All">All</option>
                            <option value="Human">Human</option>
                            <option value="Alien">Alien</option>
                            <option value="Robot">Robot</option>
                            <option value="Animal">Animal</option>
                            <option value="Humanoid">Humanoid</option>
                            <option value="Poopybutthole">Poopybutthole</option>
                            <option value="Mythological Creature">Mythological Creature</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>

                    <label className="favorites-filter">
                        <span>Status</span>
                        <select name="status" value={filter.status} onChange={handleFilterChange}>
                            <option value="All">All</option>
                            <option value="Alive">Alive</option>
                            <option value="Dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>

                    <button
                        className="btn g favorites-reset"
                        type="button"
                        onClick={() => setFilter(initialFilter)}
                    >
                        Reset
                    </button>
                </section>
            </div>
        </main>
    )
}
