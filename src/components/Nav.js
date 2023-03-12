import styles from '../styles/Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><NavLink style={({isActive}) => ({ color: isActive ? 'purple' : 'white' })} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-links'] : ''} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles['nav-links'] : ''} to="/characters">Characters</NavLink></li>
            </ul>
        </nav>
    );
}