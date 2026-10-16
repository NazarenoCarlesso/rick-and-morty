import { Link } from 'react-router'
import Search from './Search'

export default function Home({ onSearch }) {
    return (
        <main className="r home-page">
            <div className="home-glow home-glow-top" aria-hidden="true" />
            <div className="home-glow home-glow-side" aria-hidden="true" />

            <div className="home-content">
                <Search onSearch={onSearch} />

                <section className="home-cards" aria-label="Explore Rick and Morty">
                    <article className="glass home-card">
                        <h2>Rick &amp; Morty API</h2>
                        <p>Find your favorite characters across every dimension.</p>
                        <Link className="btn g home-card-button" to="/deck">Explore</Link>
                    </article>

                    <article className="glass home-card">
                        <h2>Visit parallel realities</h2>
                        <p>Bring an existing deck from your account or create a new one.</p>
                        <div className="home-card-actions">
                            <Link className="btn g home-card-button" to="/">Sign in</Link>
                            <Link className="btn home-card-button" to="/deck">New deck</Link>
                        </div>
                    </article>

                    <article className="glass home-card">
                        <h2>Made by a web design rookie</h2>
                        <p>Haha, what a loser! Can you believe that?</p>
                        <Link className="btn g home-card-button" to="/about">About me</Link>
                    </article>
                </section>
            </div>
        </main>
    )
}
