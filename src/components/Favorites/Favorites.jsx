import React from 'react'
import { connect, useDispatch } from 'react-redux'
import styles from './Favorites.module.css'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/actions'

function Favorites({ myFavorites }) {
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className={styles.divContainer}>
            <select onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {myFavorites.map(c => (<Card key={c.id} id={c.id} name={c.name} species={c.species} gender={c.gender}
                image={c.image} status={c.status} onClose={() => { }} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)