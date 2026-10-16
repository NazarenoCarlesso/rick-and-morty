import GitHubIcon from '@mui/icons-material/GitHub'
import StarIcon from '@mui/icons-material/Star'

export default function About() {
    return (
        <main className="r about-page">
            <div className="about-content">
                <header className="about-heading">
                    <p className="about-eyebrow">Across the multiverse</p>
                    <h1>About this universe</h1>
                    <p>Learn about the project, its creator, and the API behind the characters.</p>
                </header>

                <section className="about-cards" aria-label="About the project">
                    <article className="glass about-card">
                        <span className="about-card-index">01 / THE PROJECT</span>
                        <h2>What is this?</h2>
                        <p>
                            Explore more than 800 characters from across the dimensions and
                            collect your favorites in a personal deck.
                        </p>
                        <a className="btn g about-action" href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
                            <span>Visit the API</span>
                            <span className="about-action-icon" aria-hidden="true">↗</span>
                        </a>
                    </article>

                    <article className="glass about-card">
                        <span className="about-card-index">02 / THE CREATOR</span>
                        <h2>Who are you?</h2>
                        <p>
                            I&apos;m Nazareno Carlesso, a full-stack web developer who enjoys
                            learning new things and collaborating on different projects.
                        </p>
                        <a className="btn g about-action" href="https://github.com/NazarenoCarlesso" target="_blank" rel="noreferrer">
                            <span>Visit my GitHub</span>
                            <GitHubIcon fontSize="small" />
                        </a>
                    </article>

                    <article className="glass about-card">
                        <span className="about-card-index">03 / THE STORY</span>
                        <h2>Why build this?</h2>
                        <p>
                            I created this app during my four-month Fullstack Developer
                            Bootcamp at soyHenry to practice what I learned and explore my creativity.
                        </p>
                        <a className="btn about-action" href="https://github.com/NazarenoCarlesso/rick-and-morty" target="_blank" rel="noreferrer">
                            <span>Explore the project</span>
                            <StarIcon fontSize="small" />
                        </a>
                    </article>
                </section>
            </div>
        </main>
    )
}
