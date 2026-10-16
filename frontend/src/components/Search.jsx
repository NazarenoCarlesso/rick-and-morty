import { useState } from 'react'
import { useNavigate } from 'react-router'
import SearchIcon from '@mui/icons-material/Search'

export default function Search({ onSearch }) {
    const [characterId, setCharacterId] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!characterId) return

        const added = await onSearch(characterId)
        if (added) navigate('/deck')
    }

    return (
        <section className="home-hero glass">
            <div className="home-hero-art" aria-hidden="true">
                <span className="home-orbit home-orbit-one" />
                <span className="home-orbit home-orbit-two" />
                <span className="home-star home-star-one" />
                <span className="home-star home-star-two" />
                <span className="home-star home-star-three" />
                <span className="home-star home-star-four" />
            </div>
            <div className="home-hero-copy">
                <p className="home-eyebrow">The multiverse, indexed</p>
                <h1>
                    Find every <span className="wm">Rick</span>,
                    <br />
                    every <span className="wm">Morty</span>.
                </h1>
                <form className="home-search" onSubmit={handleSubmit}>
                    <label className="sr-only" htmlFor="character-search">Search characters by ID</label>
                    <SearchIcon className="home-search-icon" aria-hidden="true" />
                    <input
                        id="character-search"
                        type="number"
                        min="1"
                        inputMode="numeric"
                        placeholder="Search characters..."
                        value={characterId}
                        onChange={(event) => setCharacterId(event.target.value)}
                    />
                    <button className="btn home-search-button" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </section>
    )
}
