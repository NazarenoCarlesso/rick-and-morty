import SearchBar from '../SearchBar/SearchBar'
// eslint-disable-next-line no-unused-vars
import styles from './Nav.module.css'

export default function Nav(props) {
    return (
        <div>
            <SearchBar onSearch={props.search}/>
        </div>
    )
}