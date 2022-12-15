import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button className={styles.buttonClose} onClick={props.onClose}>X</button>
         <div className={styles.divName}>
            <h2 className={styles.h2Name}>{props.name}</h2>
         </div>
         <img  src={props.image} alt="" />
         <div className={styles.divProps}>
            <h2 className={styles.h2Species}>{props.species}</h2>
            <h2 className={styles.h2Gender}>{props.gender}</h2>
         </div>
      </div>
   );
}
