import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Card.module.css'
import { addFav, deleteFav } from '../redux/actions'

export default function Card(props) {
   const dispatch = useDispatch()
   const isFav = useSelector(state => state.allFavorites.some(fav => fav.id === props.id))

   const handleFavorite = () => {
      if (isFav) {
         dispatch(deleteFav(props.id))
      } else {
         dispatch(addFav({
            id: props.id,
            name: props.name,
            species: props.species,
            gender: props.gender,
            image: props.image,
            status: props.status
         }))
      }
   }

   return (
      <article className={styles.divContainer}>
         <div className={styles.card}>
            <div className={styles.cardHeader}>
               <Link className={styles.name} to={`/detail/${props.id}`} title={props.name}>
                  {props.name}
               </Link>
               <div className={styles.cardActions}>
                  <button
                     className={styles.favorite}
                     type="button"
                     onClick={handleFavorite}
                     aria-label={isFav ? `Remove ${props.name} from favorites` : `Add ${props.name} to favorites`}
                     aria-pressed={isFav}
                  >
                     {isFav ? '♥' : '♡'}
                  </button>
                  {props.onClose && (
                     <button
                        className={styles.close}
                        type="button"
                        onClick={() => props.onClose(props.id)}
                        aria-label={`Remove ${props.name} from deck`}
                     >
                        ×
                     </button>
                  )}
               </div>
            </div>

            <Link className={styles.character} to={`/detail/${props.id}`} aria-label={`View details for ${props.name}`}>
               <img src={props.image} alt={props.name} />
            </Link>

            <footer className={styles.cardFooter}>
               <span>Rick and Morty</span>
               <span>{props.position}/{props.total}</span>
            </footer>
         </div>
      </article>
   )
}
