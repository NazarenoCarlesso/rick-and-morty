import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Cards from './Cards'
import Portal from './Portal'

const MAX_CHARACTER_ID = 826

export default function Deck({ characters, close, onSearch }) {
    const [characterId, setCharacterId] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!characterId) return

        const added = await onSearch(characterId)
        if (added) setCharacterId('')
    }

    const handleRandom = () => {
        const randomId = Math.floor(Math.random() * MAX_CHARACTER_ID) + 1
        onSearch(randomId)
    }

    return (
        <main className="r deck-page">
            <Portal position="left" />
            <Portal position="right" />

            <div className="deck-content">
                <Cards characters={characters} close={close} />

                <div className="deck-actions">
                    <form className="deck-search" onSubmit={handleSubmit}>
                        <label htmlFor="deck-character-search">Find your favorite characters</label>
                        <SearchIcon className="deck-search-icon" aria-hidden="true" />
                        <input
                            id="deck-character-search"
                            type="number"
                            min="1"
                            max={MAX_CHARACTER_ID}
                            inputMode="numeric"
                            value={characterId}
                            onChange={(event) => setCharacterId(event.target.value)}
                            placeholder="Search..."
                        />
                        <button type="submit" className="sr-only">Add character</button>
                    </form>

                    <div className="deck-random">
                        <span>Roll those dice!</span>
                        <button className="btn" type="button" onClick={handleRandom}>Random</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
