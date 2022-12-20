import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, close } = props;

   return (
      <div>
         <div className={styles.Div}>
            {characters.map(c => {
               return (
                  <Card key={c.id} id={c.id} name={c.name} species={c.species} gender={c.gender}
                     image={c.image} status={c.status} onClose={() => close(c.id)} />
               )
            })}
         </div>
         <div className={styles.PortalContainer} style={{left: '-20px'}}><div className={styles.Portal}/></div>
         <div className={styles.PortalContainer} style={{left: '990px'}}><div className={styles.Portal}/></div>
      </div>
   )
}
