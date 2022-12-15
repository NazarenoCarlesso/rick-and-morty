import Card from './Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   return <div className={styles.div}>
      {characters.map(character => {
         const { name, species, gender, image } = character // falta onClose
         return (<Card name={name} species={species} gender={gender} image={image} onClose={() => window.alert('Emulamos que se cierra la card')}></Card>)
      })}
   </div>;
}
