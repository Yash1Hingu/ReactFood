import {Fragment} from 'react';
import styles from './Header.module.css';
import headerImage from '../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton onClick={props.onShow}/> 
            </header>
            <div className={styles['main-image']}>
                <img src={headerImage} alt="The full Table of Food." />
            </div>
        </Fragment>
    );
}
export default Header;