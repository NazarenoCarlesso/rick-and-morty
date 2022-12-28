import { Link } from 'react-router-dom'
import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.divContainer}>
         <button onClick={props.onClose}>X</button>
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
