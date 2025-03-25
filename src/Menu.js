import {Link} from "react-router-dom";
import style from './styles/Menu.module.css';
import starters from './images/starters.jpeg';
import mdish from './images/maindish.webp';
import desserts from './images/dessert.avif';
import beverage from './images/beverage.jpg';
export default function Menu(){
    return(
        <div className={style.Menu}>
            <div className={style.container}>
                <h1 className={style.heading}>Menu</h1>
                <div className={style.menu}>
                    <div className={style.menuItem}>
                        <img className={style.image} src={starters} alt="Starters" />
                        <h3 className={style.itemTitle}>Starters<Link to='/' className={style.link}>view</Link></h3>
                    </div>
                    <div className={style.menuItem}>
                        <img className={style.image} src={mdish} alt="Main course" />
                        <h3 className={style.itemTitle}>Main Course<Link to='/' className={style.link}>view</Link></h3>
                    </div>
                    <div className={style.menuItem}>
                        <img className={style.image} src={desserts} alt="Desserts" />
                        <h3 className={style.itemTitle}>Desserts<Link to='/' className={style.link}>view</Link></h3>
                    </div>
                    <div className={style.menuItem}>
                        <img className={style.image} src={beverage} alt="Beverage" />
                        <h3 className={style.itemTitle}>Beverages<Link to='/' className={style.link}>view</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}