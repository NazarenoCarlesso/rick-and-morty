import Card from '../Card/Card'
import styles from './Cards.module.css'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Cards({ characters, close }) {
   return (
      <div>
         <ScrollContainer className={styles.divCards}>
            {characters.map(c => (
                  <Card key={c.id} id={c.id} name={c.name} species={c.species} gender={c.gender}
                     image={c.image} status={c.status} onClose={() => close(c.id)} />
               )
            )}
         </ScrollContainer>
         <div className={styles.portalContainerLeft}>
            <div className={styles.portal} />
         </div>
         <div className={styles.portalContainerRight}>
            <div className={styles.portal} />
         </div>
      </div>
   )
}
