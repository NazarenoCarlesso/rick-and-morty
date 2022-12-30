import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './Card.module.css'
import { addFav, deleteFav } from '../../redux/actions'

function Card(props) {
   const { addFav, deleteFav, myFavorites } = props

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteFav(props.id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.id === props.id) setIsFav(true)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites])

   return (
      <div className={styles.divContainer}>
         {
            isFav
               ? (<button onClick={handleFavorite}>❤️</button>)
               : (<button onClick={handleFavorite}>🤍</button>)
         }
         <button className={styles.close} onClick={props.onClose}>❌</button>
         <div className={styles.card}>
            <div className={styles.character}>
               <Link to={`/detail/${props.id}`}>
                  <h2 title={props.name}>{props.name}</h2>
                  <img src={props.image} alt='Character' />
               </Link>
            </div>
            <img className={styles.logo} src='./img/Rick_and_Morty.png' alt='Rick And Morty' />
            <div className={styles.light}></div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (char) => dispatch(addFav(char)),
      deleteFav: (id) => dispatch(deleteFav(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)