import Card from './Card/Card'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Cards({ characters, close }) {
   return (
      <ScrollContainer style={{ display: "flex", margin: "30px 3vw", width: "94vw", borderRadius: "9rem", minHeight: "404px" }}>
         {characters.map(c => <Card key={c.id} id={c.id} name={c.name} species={c.species} gender={c.gender} image={c.image} status={c.status} onClose={() => close(c.id)} />)}
      </ScrollContainer>
   )
}