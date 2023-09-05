

import mealsImage from '../../assets/meals.jpg';
import CartButton from '../Layout/CartButton';

import classes from './Header.module.css';

const Header = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
               <CartButton onClick={props.onshowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A Table Full of Delecious Food"/>
            </div>
            
        </React.Fragment>
    );

}

export default Header;