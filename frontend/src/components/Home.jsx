import { Link } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'
import Search from './Search'

const cardListVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.05,
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.35, ease: 'easeOut' },
    },
}

export default function Home({ onSearch }) {
    const shouldReduceMotion = useReducedMotion()

    return (
        <main className="r home-page">
            <div className="home-glow home-glow-side" aria-hidden="true" />

            <div className="home-content">
                <Search onSearch={onSearch} />

                <motion.section
                    className="home-cards"
                    aria-label="Explore Rick and Morty"
                    variants={cardListVariants}
                    initial={shouldReduceMotion ? false : 'hidden'}
                    animate="visible"
                >
                    <motion.article className="glass h home-card" variants={cardVariants}>
                        <h2>Rick &amp; Morty API</h2>
                        <p>Find your favorite characters across every dimension.</p>
                        <Link className="btn g home-card-button" to="/deck">Explore</Link>
                    </motion.article>

                    <motion.article className="glass h home-card" variants={cardVariants}>
                        <h2>Visit parallel realities</h2>
                        <p>Bring an existing deck from your account or create a new one.</p>
                        <div className="home-card-actions">
                            <Link className="btn g home-card-button" to="/">Sign in</Link>
                            <Link className="btn home-card-button" to="/deck">New deck</Link>
                        </div>
                    </motion.article>

                    <motion.article className="glass h home-card" variants={cardVariants}>
                        <h2>Made by a web design rookie</h2>
                        <p>Haha, what a loser! Can you believe that?</p>
                        <Link className="btn g home-card-button" to="/about">About me</Link>
                    </motion.article>
                </motion.section>
            </div>
        </main>
    )
}
