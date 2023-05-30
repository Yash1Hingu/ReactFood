import {Fragment} from 'react';
import styles from './Header.module.css';
import headerImage from '../assets/meals.jpg'
const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeal</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={headerImage} alt="The full Table of Food." />
            </div>
        </Fragment>
    );
}
export default Header;