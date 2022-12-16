import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.Card}>
         <button className={styles.Close} onClick={props.onClose}>X</button>
         <div className={styles.Character}>
            <h2>{props.name}</h2>
            <img src={props.image} alt="" />
         </div>
         <img className={styles.Logo} src='./img/Rick_and_Morty.png' alt='Rick And Morty'/>
         <div className={styles.Status}>
            <h3>{props.status} - {props.species}</h3>
         </div>
         <div className={styles.InteriorLight}></div>
      </div>
   );
}
