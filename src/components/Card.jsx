import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Card.module.css'
import { addFav, deleteFav } from '../redux/actions'

export default function Card(props) {
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const allFavorites = useSelector(state => state.allFavorites)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFav(props.id))
      } else {
         setIsFav(true)
         dispatch(addFav(props))
      }
   }

   useEffect(() => {
      allFavorites.forEach(fav => {
         if (fav.id === props.id) setIsFav(true)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [allFavorites])

   return (
      <div className={styles.divContainer}>
         {
            isFav
               ? (<button onClick={handleFavorite}>❤️</button>)
               : (<button onClick={handleFavorite}>🤍</button>)
         }
         {
            props.onClose
               ? (<button className={styles.close} onClick={() => props.onClose(props.id)}>❌</button>)
               : (<></>)
         }
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