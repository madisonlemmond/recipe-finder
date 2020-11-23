import React from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className={styles.navBar}>
            <nav>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className={styles.navButtons}>Home</li>
                </Link>
                <Link to="/favorites" style={{ textDecoration: 'none' }}>
                <li className={styles.navButtons}>Favorites</li>
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;