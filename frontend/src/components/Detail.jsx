import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const BACK = import.meta.env.VITE_BACK
const MAX_CHARACTER_ID = 826
const DETAIL_ENDPOINT = BACK.includes('rickandmortyapi.com') ? 'character' : 'detail'

export default function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState('')
    const characterId = Number(id)
    const previousId = characterId <= 1 ? MAX_CHARACTER_ID : characterId - 1
    const nextId = characterId >= MAX_CHARACTER_ID ? 1 : characterId + 1

    useEffect(() => {
        const controller = new AbortController()
        setCharacter(null)
        setError('')

        fetch(`${BACK}/api/${DETAIL_ENDPOINT}/${id}`, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error('Unable to load character details.')
                return response.json()
            })
            .then((data) => setCharacter(data))
            .catch((fetchError) => {
                if (fetchError.name !== 'AbortError') setError(fetchError.message)
            })

        return () => controller.abort()
    }, [id])

    return (
        <main className="r detail-page">
            <div className="portal detail-background-portal" aria-hidden="true" />

            {error ? (
                <p className="detail-message" role="alert">{error}</p>
            ) : !character ? (
                <p className="detail-message" role="status">Loading character...</p>
            ) : (
                <div className="detail-content">
                    <section className="glass detail-info" aria-labelledby="character-name">
                        <p className="detail-eyebrow">Character</p>
                        <h1 id="character-name">{character.name}</h1>

                        <div className="detail-tags" aria-label="Character attributes">
                            <span>{character.gender}</span>
                            <span>{character.species}</span>
                            <span>Status: {character.status}</span>
                        </div>

                        <dl className="detail-facts">
                            <div>
                                <dt>Type</dt>
                                <dd>{character.type || 'Unknown'}</dd>
                            </div>
                            <div>
                                <dt>Last known location</dt>
                                <dd>{character.location?.name || 'Unknown'}</dd>
                            </div>
                            <div>
                                <dt>Origin</dt>
                                <dd>{character.origin?.name || 'Unknown'}</dd>
                            </div>
                        </dl>
                    </section>

                    <div className="detail-portrait-nav">
                        <Link className="btn g detail-step" to={`/detail/${previousId}`} aria-label="Previous character">
                            ‹
                        </Link>
                        <div className="detail-portrait-frame">
                            <span className="detail-portal-glow" />
                            <span className="detail-portal-outer" />
                            <span className="detail-portal-core">
                                <img src={character.image} alt={`${character.name} portrait`} />
                            </span>
                            <span className="detail-portal-rim" />
                        </div>
                        <Link className="btn g detail-step" to={`/detail/${nextId}`} aria-label="Next character">
                            ›
                        </Link>
                    </div>
                </div>
            )}
        </main>
    )
}
