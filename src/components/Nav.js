import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/characters">Characters</Link></li>
            </ul>
        </nav>
    );
}