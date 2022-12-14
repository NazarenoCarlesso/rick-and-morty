import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map(character => {
         const { name, species, genre, image } = character // falta onClose
         return (<Card name={name} species={species} genre={genre} image={image} onClose={() => window.alert('Emulamos que se cierra la card')}></Card>)
      })}
   </div>;
}
