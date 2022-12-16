import Card from './Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, close } = props;
   
   return (
      <div className={styles.div}>
         {characters.map(c => {
            return (
               <Card key={c.id} name={c.name} species={c.species} gender={c.gender}
               image={c.image} status={c.status} onClose={() => close(c.id)}/>
            )
         })}
      </div>
   )
}
