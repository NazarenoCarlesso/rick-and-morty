import Card from './Card'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Cards({ characters, close }) {
   return (
      <ScrollContainer className="deck-cards">
         {characters.map((c, index) => (
            <Card
               key={c.id}
               id={c.id}
               name={c.name}
               species={c.species}
               gender={c.gender}
               image={c.image}
               status={c.status}
               position={index + 1}
               total={characters.length}
               onClose={close}
            />
         ))}
      </ScrollContainer>
   )
}