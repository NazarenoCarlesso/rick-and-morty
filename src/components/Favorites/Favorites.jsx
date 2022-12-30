import React from 'react'
import { connect } from 'react-redux'
import styles from './Favorites.module.css'
import Card from '../Card/Card'

function Favorites({ myFavorites }) {
    return (
        <div className={styles.divContainer}>
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