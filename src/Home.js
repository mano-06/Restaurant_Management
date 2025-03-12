import './styles/Home.css';

export default function Home(){
    return(
        <>
            <header className="Header">
                <div className="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned<br></br>Mediterranean restaurant,<br></br>focused on traditional<br></br>recipes served  with a modern<br></br>twist.</p>
                    <button type="Submit">Reserve a Table</button>
                </div>
            </header>
            <main className="container">
                <div className="container1">
                    <h1>This weeks specials!</h1>
                    <button type="submit">Online Menu</button>
                </div>
                <div>
                    <article className="container2">
                            <section>
                                <center><img src='{Bruchetta}' alt="img1" height="200px" width="200px" /></center>
                                <h2>Greek Salad</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore perferendis quas ex quidem quaerat, aliquid excepturi dolores quisquam est corporis consequuntur repellat corrupti ullam mollitia explicabo cum atque sint.</p>
                            </section>
                            <section>
                                <center><img src='{Bruchetta}' alt="img1" height="200px" width="200px"/></center>
                                <h2>Bruchetta</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae soluta blanditiis cumque magnam, non et doloremque culpa mollitia, vitae ratione eaque ipsum dolore ex accusantium error recusandae minima deserunt aliquid!</p>
                            </section>
                            <section>
                                <center><img src='{LDessert}' alt="img1" height="200px" width="200px"/></center>
                                <h2>Lemon Dessert</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae soluta blanditiis cumque magnam, non et doloremque culpa mollitia, vitae ratione eaque ipsum dolore ex accusantium error recusandae minima deserunt aliquid!</p>
                            </section>
                    </article>
                </div>
            </main>
            <footer className="Footer">
                <hr/>
                <img src="{image}" alt=""/>
                <p>copyright &copy; Little Lemon</p>
            </footer>
        </>

    );
}