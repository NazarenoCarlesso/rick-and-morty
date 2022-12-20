import { Link } from 'react-router-dom'
import styles from './Card.module.css';

export default function Card(props) {
   // const getColor = id => '#' + Math.floor((id/826)*16777215).toString(16)
   return (
      <div className={styles.Div}>
         <button className={styles.Close} onClick={props.onClose}>X</button>
         <div className={styles.Card}>
            <div className={styles.Character}>
               <Link to={`/detail/${props.id}`}>
                  <h2>{props.name}</h2>
                  <img src={props.image} alt='Character' />
               </Link>
            </div>
            <img className={styles.Logo} src='./img/Rick_and_Morty.png' alt='Rick And Morty' />
            <div className={styles.InteriorLight}></div>
         </div>
      </div>
   )
}
