import { NavLink } from 'react-router'

export default function NavBar() {
    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Main navigation">
                <NavLink className="site-nav-link" to="/home">Home</NavLink>
                <NavLink className="site-nav-link" to="/deck">Deck</NavLink>
                <NavLink className="wm site-nav-logo" to="/home">Rick and Morty</NavLink>
                <NavLink className="site-nav-link" to="/favorites">Favorites</NavLink>
                <NavLink className="site-nav-link" to="/about">About</NavLink>
            </nav>
        </header>
    )
}
