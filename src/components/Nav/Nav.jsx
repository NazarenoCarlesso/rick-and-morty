import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav(props) {
    const { search } = props
    return (
        <div className={styles.NavBar}>
            <NavLink to='/home'>
                <div className={styles.NavElement}>
                    <img src='./img/Logo.jpg' alt='Logo'/>
                    <h4>Rick and Morty</h4>
                </div>
            </NavLink>
            <SearchBar onSearch={search}/>
            <NavLink to='/about'>
                <div className={styles.NavElement}>
                    <h4>About us</h4>
                </div>
            </NavLink>
        </div>
    )
}