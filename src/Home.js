import {Link} from "react-router-dom";
import style from './styles/Home.module.css';
import kdosa from './images/kari dosa1.jpg';
import pbriyani from './images/pbriyani.webp';
import ppasanda from './images/panner pasanda.jpeg';
export default function Home(){
    return(
        <div className={style.home}>
            <header className={style.Header}>
                <div className={style.info}>
                    <h1>Saffron</h1>
                    <h2>Vellore</h2>
                    <p>We are a family owned<br></br>Indian restaurant,<br></br>focused on traditional<br></br>recipes served with a modern<br></br>twist.</p>
                    <Link to="/Reservation"><button>Reserve a Table</button></Link>
                </div>
            </header>
            <main className={style.container}>
                <div className={style.container1}>
                    <h1>This week specials! <span style={{fontSize: "12px", fontWeight: "light"}}>(Not for delivery)</span></h1>
                    <Link to="/Menu"><button type="submit">Menu</button></Link>
                </div>
                <div>
                    <article className={style.container2}>
                        <section className={style.section}>
                            <img src={kdosa} alt="img1" className={style.foodImage} />
                            <h2>Kari Dosa</h2>
                            <p>The three-layered Kari dosa made of a bottom layer of plain dosa, omelette and a top layer of spicy mutton keema (minced mutton) brings out the true local flavours that reward one of the most fulfilling experiences.</p>
                        </section>
                        <section className={style.section}>
                            <img src={pbriyani} alt="img1" className={style.foodImage} />
                            <h2>Pot Biryani</h2>
                            <p>Chicken Biriyani served in a Clay Pot with Boiled Egg and Fried Cashew Nuts, accompanied with Gravy and Raita.</p>
                        </section>
                        <section className={style.section}>
                            <img src={ppasanda} alt="img1" className={style.foodImage} />
                            <h2>Panner Pasanda</h2>
                            <p>Soft Paneer Sandwiches are filled with aromatic nut & spice mixture, later fried until crisp and served with a luxurious gravy. Paneer Pasanda is best served with fluffy Basmati Rice, Butter Naan, Tandoori Roti or with plain Parathas</p>
                        </section>
                    </article>
                </div>
            </main>
            <footer className={style.Footer}>
                <hr/>
                <p className={style.copyright}>copyright &copy; Saffron</p>
                <img src="{image}" alt="" className={style.footerImage}/>
            </footer>
        </div>
    );
}